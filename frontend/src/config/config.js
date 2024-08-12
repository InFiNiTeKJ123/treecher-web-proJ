const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
    isProd,
    // apiUrlPrefix: isProd ? '/api' : 'http://dj_treecher_web_server:8000/api/'
    apiUrlPrefix: isProd ? 'http://192.168.10.10:8000/api/' : '/api'
}

export default config