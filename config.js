const env = process.env.ENV || 'development';

const configs = {
    development: {
        domain: {
            blogService: 'http://api-uat.nimbus.com.vn',
            authService: 'http://auth-uat.nimbus.com.vn',
        }
    },
    uat: {
        domain: {
            blogService: 'http://api-uat.nimbus.com.vn',
            authService: 'http://auth-uat.nimbus.com.vn',
        }
    },
    production: {
        domain: {
            blogService: 'https://api.nimbus.com.vn/blog-service',
            authService: 'https://api.nimbus.com.vn/auth-service',
        }
    },
}[env];

export default configs;