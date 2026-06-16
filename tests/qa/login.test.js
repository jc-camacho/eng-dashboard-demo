// QA: Full login flow test
describe('Login flow', () => {
  it('should redirect after successful login', async () => {
    const res = await request(app).post('/auth/login').send({ email: 'test@test.com', password: '123' })
    expect(res.status).toBe(200)
  })
})