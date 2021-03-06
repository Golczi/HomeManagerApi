var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../app.js');
var mongoose = require('mongoose');
var Expense = mongoose.model('Expense');
var agent = request.agent(app);



describe('Book Crud test', function () {

    it('Should allow adding new book and return new book with _id', function (done) {
        var expensePost = {
            title: 'Invocie for water',
            category: 'Bill',
            creator: 'Pawel',
            value: 222
        };


        agent.post('/api/expenses')
            .send(expensePost)
            .expect(200)
            .end(function (err, results) {
                expect(results.body).to.have.property('_id');
                done();
            });

    });

    afterEach(function (done) {
        Expense.remove().exec();
        done();
    });
});
