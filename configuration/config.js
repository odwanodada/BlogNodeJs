require('dotenv').config();

const {Client} = require('pg');
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_user}:${process.env.DATABASE_PASSWORD}@${process.env.DB_HOST}}:
${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const client = new Client({
    connectionString: isProduction ? process.env.DATABASE_URL
    : connectionString,
    ssl: isProduction
})

module.exports = client
//postgres://username:password@host:port/database