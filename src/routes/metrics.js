// GET /projects/:id/metrics
module.exports = async (req, res) => {
  const metrics = await getProjectMetrics(req.params.id)
  res.json(metrics)
}