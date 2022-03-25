const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
    isProd,
    severUrlPrefix: isProd ? '' : 'http://127.0.0.1:8000'
}

export default config