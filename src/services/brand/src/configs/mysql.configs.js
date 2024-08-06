const dev = {
    app: {
        port: process.env.DEV_MYSQL_APP_PORT || 3001
    },
    db: {
        password: process.env.DEV_MYSQL_DB_PASSWORD,
        name: process.env.DEV_MYSQL_DB_NAME,
        host: process.env.DEV_MYSQL_DB_HOST,
        port: process.env.DEV_MYSQL_DB_PORT || 3306,
        user: process.env.DEV_MYSQL_DB_USER,
    }
}

const product = {
    app: {
        port: process.env.PRO_MYSQL_APP_PORT || 3001
    },
    db: {
        password: process.env.PRO_MYSQL_DB_PASSWORD,
        name: process.env.PRO_MYSQL_DB_NAME,
        host: process.env.PRO_MYSQL_DB_HOST,
        port: process.env.PRO_MYSQL_DB_PORT || 3306,
        user: process.env.PRO_MYSQL_DB_USER,
    }
}

const config = { dev, product }
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]
