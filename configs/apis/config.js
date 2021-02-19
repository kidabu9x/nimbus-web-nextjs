const env = process.env.ENV || 'development';

const configs = {
    development: {
        domain: {
            blogService: 'https://api.nimbus.com.vn/blog-service',
            authService: 'https://api.nimbus.com.vn/auth-service',
            courseService: 'https://api.nimbus.com.vn/course-service/cms'
        }
    },
    production: {
        domain: {
            blogService: 'https://api.nimbus.com.vn/blog-service',
            authService: 'https://api.nimbus.com.vn/auth-service',
            courseService: 'https://api.nimbus.com.vn/course-service/cms'
        }
    },
}[env];

export default configs;