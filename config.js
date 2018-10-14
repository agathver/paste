module.exports = {
    production: process.env.NODE_ENV === 'production',
    dsn: process.env.MONGO_URI || 'mongodb://localhost:27017/pastebin',
    port: process.env.PORT || 1337
}
