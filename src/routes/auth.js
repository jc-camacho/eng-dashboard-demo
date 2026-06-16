// JWT Authentication endpoint
const jwt = require('jsonwebtoken')
module.exports = (req, res) => {
  const token = jwt.sign({ id: req.body.userId }, process.env.JWT_SECRET, { expiresIn: '1h' })
  res.json({ token })
}