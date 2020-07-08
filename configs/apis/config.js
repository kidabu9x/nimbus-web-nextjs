const env = process.env.ENV || 'development';

const configs = {
    development: {
        domain: {
            blogService: 'https://api.nimbus.com.vn/blog-service',
            authService: 'https://api.nimbus.com.vn/auth-service'
        }
    },
    production: {
        domain: {
            blogService: 'https://api.nimbus.com.vn/blog-service',
            authService: 'https://api.nimbus.com.vn/auth-service'
        }
    },
}[env];

export default configs;