export default function({ store, redirect }) {
    if (process.client) {
        if (!store.getters['auth/authUser']) {
            alert('Not authenticated. Redirect to homepage.')
        }
        return redirect('/')
    }
}
