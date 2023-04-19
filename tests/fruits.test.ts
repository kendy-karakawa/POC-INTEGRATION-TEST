import app from "app";
import { number, string } from "joi";
import supertest from "supertest";

const server = supertest(app)

describe('GET /health', ()=>{
    
    it('Should respond with "Iam alive!"', async()=>{
        const result = await server.get("/health");
        
        expect(result.text).toBe("I'am alive!");
    })
})

describe('GET /fruits', ()=>{

    it('Should result with all fruits',async () => {
        const result = await server.get('/fruits')
        expect(result.statusCode).toBe(200)
    })
})


describe('POST /fruits', ()=>{

    it('Should result with status 422 when body is empitity',async () => {
        const body = {}
        const result = await server.post('/fruits').send(body)
        expect(result.statusCode).toBe(422)
    })

    it('Should result with status 201 when create a fruit',async () => {
        const body = {
            name: 'abacaxi',
            price: 20
        }
        const result = await server.post('/fruits').send(body)
        expect(result.statusCode).toBe(201)
    })

    it('Should result with status 409 when given fruit already exists',async () => {
        const body = {
            name: 'abacaxi',
            price: 20
        }
        const result = await server.post('/fruits').send(body)
        expect(result.statusCode).toBe(409)
    })
})

describe('GET /fruits/:id', ()=>{

    it('hould respond with status 404 when given fruit doesnt exist', async () => {
        const result = await server.get('/fruits/100')
        expect(result.status).toBe(404)
    })

    it('should respond with fruit data', async () => {
        const result = await server.get('/fruits/1')
        console.log(result)
        expect(result.body).toEqual({
            id: 1,
            name: 'abacaxi',
            price: 20
        })
    })
})