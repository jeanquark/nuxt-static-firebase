<template>
    <div class="center">
        <Logo />
        <h1 class="margin-top-bottom">
            nuxt-static-firebase
        </h1>
        <div class="box">With authentication and GitHub Pages auto deployment. (Almost) no CSS, minimum dependencies.</div>
        <p><b>Environment: </b>{{ environment }}</p><br />
        <p><b>Posts from Firebase: </b>{{ posts }}</p>
    </div>
</template>

<script>
export default {
    layout: 'default',
    async mounted() {
        try {
            if (this.posts.length < 1) {
                await this.$store.dispatch('posts/fetchPosts')
            }
        } catch (error) {
            console.log('error: ', error)
        }
    },
    data() {
        return {
            environment: process.env.NODE_ENV
        }
    },
    computed: {
        posts() {
            return this.$store.state.posts.list
        }
    },
    methods: {}
}
</script>

<style scoped>
.center {
    text-align: center;
}
.margin-top-bottom {
    margin: 20px 0px;
}
.box {
    display: inline-block;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
}
</style>
