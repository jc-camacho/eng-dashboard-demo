// QA: Regression test for CORS fix
describe('CORS regression', () => {
  it('should allow requests from staging', async () => {
    const res = await request(app).get('/').set('Origin', process.env.STAGING_URL)
    expect(res.headers['access-control-allow-origin']).toBeTruthy()
  })
})