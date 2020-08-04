export default {
    target: 'static',
    router: {
        base: '/nuxt-static-firebase/'
    },
    publicRuntimeConfig: {
        nodeEnv: process.env.NODE_ENV
    },
    privateRuntimeConfig: {
        apiSecret: process.env.API_SECRET
    },
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            '@nuxtjs/firebase',
            {
                config: {
                    development: {
                        apiKey: process.env.API_KEY,
                        authDomain: process.env.AUTH_DOMAIN,
                        databaseURL: process.env.DATABASE_URL,
                        projectId: process.env.PROJECT_ID,
                        storageBucket: process.env.STORAGE_BUCKET,
                        messagingSenderId: process.env.MESSAGING_SENDER_ID,
                        appId: process.env.APP_ID
                    },
                    production: {
                        apiKey: process.env.API_KEY,
                        authDomain: process.env.AUTH_DOMAIN,
                        databaseURL: process.env.DATABASE_URL,
                        projectId: process.env.PROJECT_ID,
                        storageBucket: process.env.STORAGE_BUCKET,
                        messagingSenderId: process.env.MESSAGING_SENDER_ID,
                        appId: process.env.APP_ID
                    }
                },
                services: {
                    auth: {
                        persistence: 'local', // default

                        // it is recommended to configure either a mutation or action but you can set both
                        initialize: {
                            onAuthStateChangedMutation: 'auth/ON_AUTH_STATE_CHANGED_MUTATION'
                        },

                        ssr: false // default
                    },
                    firestore: true,
                    functions: false,
                    storage: false,
                    realtimeDb: false,
                    messaging: false,
                    performance: false,
                    analytics: false,
                    remoteConfig: false
                }
            }
        ]
    ],
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {}
}
