const app = require('../app')
const request = require('supertest');



test('GET /', done => {
    request(app)
        .get('/index')
        .expect(200, JSON.stringify({greeting: 'Welcome to the CRAP!'}))
        .end(done)
});

test('GET /userid', done => {
    request(app)
        .get('/index/1')
        .expect(200)
        .end(function(err, res) {
            expect(res.body.length).toEqual(4);
            done();
        });
});

test('POST /training', done => {
    const fakeEntry = {
                training_id: 2,
                user_id: 1,
                completion_date: "2021-04-21"
            }
    request(app)
        .post('/index/training')
        .send(fakeEntry)
        .expect(201)
        .end(function(err, res) {
            expect(res.body.training_id).toEqual(2)
            done();
        });
});

// //
// [
//     {
//         "training_id": 1,
//         "user_id": 1,
//         "completion_date": "2020-02-27T08:00:00.000Z"
//     },
//     {
//         "training_id": 3,
//         "user_id": 1,
//         "completion_date": "2020-04-30T07:00:00.000Z"
//     },
//     {
//         "training_id": 4,
//         "user_id": 1,
//         "completion_date": "2020-02-20T08:00:00.000Z"
//     }
// ]