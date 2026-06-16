// QA: Pagination test
describe('Pagination', () => {
  it('should return correct page size', async () => {
    const res = await request(app).get('/projects?page=1&limit=10')
    expect(res.body.data.length).toBeLessThanOrEqual(10)
  })
})