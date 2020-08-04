<template>
    <div>
        <div style="margin-bottom: 20px;">
            <nuxt-link to="/">Home</nuxt-link> | <nuxt-link to="/protected">Protected Page</nuxt-link> |
            <client-only>
                <span v-if="!authUser">
                    <nuxt-link to="/login">Login</nuxt-link> |
                    <nuxt-link to="/register">Register</nuxt-link>
                </span>
                <span v-else>
                    <button @click="logoutUser">Logout</button><br />
                    authUser: {{ authUser }}
                </span>
            </client-only>
        </div>
        <Nuxt />
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        authUser() {
            return this.$store.getters['auth/authUser']
        }
    },
    methods: {
        async logoutUser() {
            await this.$store.dispatch('auth/logoutUser')
        }
    }
}
</script>

<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
