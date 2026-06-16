// POST /teams endpoint
module.exports = async (req, res) => {
  const team = await Team.create(req.body)
  res.status(201).json(team)
}