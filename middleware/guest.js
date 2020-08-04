export default function({ store, redirect }) {
    if (process.client) {
        if (store.getters['auth/authUser']) {
            alert('Authenticated. Redirect to homepage.')
            return redirect('/')
        }
    }
}
