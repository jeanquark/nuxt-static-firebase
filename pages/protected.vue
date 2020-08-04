<template>
    <div>
        <h2>Protected Page</h2>
    </div>
</template>

<script>
export default {
    layout: 'default',
    middleware: ['auth'],
    data() {
        return {
		}
	}

}
</script>

<style scoped></style>
