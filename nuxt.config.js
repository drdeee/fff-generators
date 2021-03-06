export default {
    target: process.env.TARGET || 'server',
    ssr: process.env.SSR !== 'FALSE',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: 'FFF-Generatoren',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            { src: 'https://github.com/mde/ejs/releases/download/v3.1.6/ejs.min.js', async: true, defer: true }
        ]
    },
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
    buildModules: [
        '@nuxt/typescript-build',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://buefy.github.io/#/documentation
        'nuxt-buefy',
        'nuxt-fontawesome',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
    buefy: {
        materialDesignIcons: false,
        defaultIconPack: 'fas',
        defaultIconComponent: 'font-awesome-icon',
    },
    fontawesome: {
        imports: [{
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
        }, ],
    },
    router: {
        base: process.env.BASE_ROUTE || '/'
    }
}