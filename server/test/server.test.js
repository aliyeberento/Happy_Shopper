let testServer = require('supertest')
let app = require('../server')

describe('Test the root path', () => {

    test('It should responde 200 to the LOGOUT route', async () => {
        const response = await testServer(app).post('/api/user/logout');
        expect(response.statusCode).toBe(200);
    });

    it('should protest the /user route', async () => {
        const response = await testServer(app).get('/api/user')
        expect (response.statusCode).toBe(403)
    });

    it('should bring back items from /api/list', async () => {
        const response = await testServer(app).get('/api/list')
        expect ( response.statusCode).toBe(200)
    });

    it('should delete items from /api/list', async () => {
        const response = await testServer(app).delete(`/api/list/:id`)
        expect(response.statusCode).toBe(500)
    });

    it('should add items from /api/list to db', async () => {
        const response = await testServer(app).post('/api/list')
        expect(response.statusCode).toBe(200)
    });

    it('should update the quantity of item', async () => {
        const response = await testServer(app).put(`/api/list/:id`)
        expect(response.statusCode).toBe(500)
    })

    it('search database and return items', async () => {
        const response = await testServer(app).get('/api/home')
        expect(response.statusCode).toBe(200)
    })

})