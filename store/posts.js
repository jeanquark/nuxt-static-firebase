export const state = () => ({
    list: []
})

export const mutations = {
    SET_POSTS(state, payload) {
        state.list = payload
    }
}

export const actions = {
    async fetchPosts({ commit }) {
        try {
            const snapshot = await this.$fireStore.collection('posts').get()
            commit(
                'SET_POSTS',
                snapshot.docs.map(doc => doc.data())
            )
        } catch (error) {
			throw error
        }
    }
}
