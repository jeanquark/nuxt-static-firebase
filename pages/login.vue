<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="container">
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required v-model="email" />

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required v-model="password" />

                <button type="submit" :disabled="!password">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'default',
    middleware: ['guest'],
    mounted () {
        // Redirect if authenticated and server access
        if (this.$store.getters['auth/authUser']) {
            return this.$router.replace('/')
        }
    },
    data() {
        return {
			email: 'john.doe@example.com',
			password: 'secret'
		}
    },
	methods: {
		async login () {
			try {
				await this.$store.dispatch('auth/loginUser', { email: this.email, password: this.password })
			} catch (error) {
				console.log('error: ', error)
			}
		}
	}

}
</script>

<style scoped></style>
