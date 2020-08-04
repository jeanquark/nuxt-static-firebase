export const state = () => ({
    authUser: null
})

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
        if (!authUser) {
            // claims = null
            // perform logout operations
            state.authUser = null
        } else {
            // Do something with the authUser and the claims object...
            const { uid, email, emailVerified } = authUser
            state.authUser = { uid, email, emailVerified }
        }
    }
}

export const actions = {
    async registerUser ({ commit }, payload) {
        try {
            const { email, password } = payload
            await this.$fireAuth.createUserWithEmailAndPassword(email, password)
        } catch (error) {
            throw error
        }
    },
    async loginUser ({ commit }, payload) {
		try {
            const { email, password } = payload
            await this.$fireAuth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            throw error
        }
    },
    async logoutUser ({ commit }) {
        try {
            await this.$fireAuth.signOut()
        } catch (error) {
            throw error
        }
    }
}

export const getters = {
    authUser (state) {
        return state.authUser
    }
}