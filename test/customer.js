const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');

// Assertion style
chai.should();

chai.use(chaiHttp);

describe('Customers API tests', () => {
    /**
     * Testing the GET /api/customers without Authorization
     */ 
    it('should GET /api/customers', (done) => {
        chai.request(server)
        .get('/api/customers')
        .end((err, response) => {
            response.should.have.status(401);
            done();
        });
    });

    /**
     * Testing the GET /api/customers with Authorization
     */ 
    it('should GET /api/customers ( authorization )', (done) => {
        chai.request(server)
        .get('/api/customers')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGE0NjQ4MTI5YjY4NDBmYzE5OGVkZSIsIm5hbWUiOiJTdG9saWNhIiwiZW1haWwiOiJ0YXJpa0BnbWFpbC5jb20iLCJwaG9uZSI6IjEyMzEyMzEyMyIsImJpcnRoRGF5IjoiMjQvMDkvMjAwMSIsInJvbGUiOjEsImlhdCI6MTYwODM4Nzg3OH0.dJ-KkbOE1J5n_hEb360sTvPGvnYLCB4wrJnWphQzHOg')
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            response.body.length.should.be.eq(13);
            done();
        });
    });

     /**
     * Testing the GET /api/customers/:id without Authorization
     */
    it('should GET /api/customers/:id', (done) => {
        chai.request(server)
        .get('/api/customers/5fda4648129b6840fc198ede')
        .end((err, response) => {
            response.should.have.status(401);
            done();
        });
    });

    /**
     * Testing the GET /api/customers/:id with Authorization
     */
    it('should GET /api/customers/:id ( authorization )', (done) => {
        chai.request(server)
        .get('/api/customers/5fda4648129b6840fc198ede')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGE0NjQ4MTI5YjY4NDBmYzE5OGVkZSIsIm5hbWUiOiJTdG9saWNhIiwiZW1haWwiOiJ0YXJpa0BnbWFpbC5jb20iLCJwaG9uZSI6IjEyMzEyMzEyMyIsImJpcnRoRGF5IjoiMjQvMDkvMjAwMSIsInJvbGUiOjEsImlhdCI6MTYwODM4Nzg3OH0.dJ-KkbOE1J5n_hEb360sTvPGvnYLCB4wrJnWphQzHOg')
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('_id');
            response.body.should.have.property('role');
            response.body.should.have.property('name');
            response.body.should.have.property('email');
            response.body.should.have.property('birthDay');
            response.body.should.have.property('phone');
            response.body.should.have.property('password');
            done();
        });
    });

     /**
     * Testing the POST /api/customers with unregistered account
     */
    it('should POST /api/customers ( unregistered )', (done) => {
        chai.request(server)
        .post('/api/customers')
        .send({
            email: 'tarik.ttasrik2s@gmail.com',
            password: '123456',
            phone: '123456789',
            birthDay: '24/09/2001',
            name: 'Tarik'
        })
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('Object');
            response.body.should.have.property('customer');
            response.body.should.have.property('msg');
            done();
        });
    });

    /**
     * Testing the POST /api/customers with unregistered account
     */
    it('should POST /api/customers ( registered )', (done) => {
        chai.request(server)
        .post('/api/customers')
        .send({
            email: 'tarik@gmail.com',
            password: '123456',
            phone: '123456789',
            birthDay: '24/09/2001',
            name: 'Tarik'
        })
        .end((err, response) => {
            response.should.have.status(404);
            response.body.should.be.a('Object');
            response.body.should.have.property('error');
            response.body.should.have.property('code');
            done();
        });
    });

     /**
     * Testing the DELETE /api/customers/:id
     */


     /**
     * Testing the PUT /api/customers/:id
     */
});