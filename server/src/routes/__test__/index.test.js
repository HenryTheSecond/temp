const app = require('../../app')
const request = require('supertest')

describe('test', () => {
    it('test get all planets', async () => {
        const res = await request(app).get('/planets').send()
        expect(res.statusCode).toEqual(200)
    })

    it('test get all launces', async () => {
        const res = await request(app).get('/launches').send()
        expect(res.statusCode).toEqual(200)
    })

    it('test add launch', async () => {
        const res = await request(app).post('/launches').send({
            mission: "new mission",
            rocket: "new rocket",
            launchDate: 'December 27, 2030',
            target: "Moon"
        })
        expect(res.statusCode).toEqual(201)
    })

    it('test add launch', async () => {
        const res = await request(app).post('/launches').send({
            mission: "new mission",
            rocket: "new rocket",
            launchDate: ' 27, 2030',
            target: "Moon"
        })
        expect(res.statusCode).toEqual(400)
    })

    it('test add launch', async () => {
        const res = await request(app).post('/launches').send({
            mission: "new mission",
            launchDate: 'December 27, 2030',
            target: "Moon"
        })
        expect(res.statusCode).toEqual(400)
    })

    it('test delete launch', async () => {
        const res = await request(app).delete('/launches/1000').send()
        expect(res.statusCode).toEqual(404)
    })

    it('test delete launch', async () => {
        const res = await request(app).delete('/launches/100').send()
        expect(res.statusCode).toEqual(200)
    })
})

