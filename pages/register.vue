<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="register">
            <div class="container">
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Username" name="email" required v-model="email" />

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required v-model="password" />

                <label for="password_confirmation"><b>Confirm Password</b></label>
                <input type="password" placeholder="Confirm Password" name="password_confirmation" required v-model="password" />

                <button type="submit" :disabled="password !== password_confirmation">Register</button>
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
			password: 'secret',
			password_confirmation: 'secret'
		}
	},
	methods: {
		async register () {
			try {
				await this.$store.dispatch('auth/registerUser', { email: this.email, password: this.password })
			} catch (error) {
				console.log('error: ', error)
			}
		}
	}
}
</script>

<style scoped></style>
