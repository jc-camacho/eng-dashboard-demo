// Fix: CORS blocking requests from staging
const cors = require('cors')
module.exports = cors({ origin: [process.env.STAGING_URL, process.env.PROD_URL] })