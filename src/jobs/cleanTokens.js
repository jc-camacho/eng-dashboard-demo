// Job: clean expired tokens
async function cleanExpiredTokens() {
  await Token.destroy({ where: { expiresAt: { $lt: new Date() } } })
}
module.exports = cleanExpiredTokens