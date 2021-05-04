const supertest = require('supertest')
const chai = require('chai')
const server = require('../../mocha_testing/src/server')

const { expect } = chai
const request = supertest.agent(server)

describe('GET /', () => {
	it('Enter / page', (done) => {
		request
			.get('/')
			.expect(200)
			.then((res) => {
				let result = res.res.text
				expect(result).to.equal('index')
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})
})

describe('POST /rewards', () => {
	it('send rank & number', (done) => {
		request
			.post('/rewards')
			.send({
				rank: '1',
				number: '1234',
			})
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				expect(res.body.rank).to.equal(1)
				expect(res.body.number).to.equal(1234)
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})

	it('/rewards/1', (done) => {
		request
			.post('/rewards/1')
			.send({
				number: '5555',
			})
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				expect(res.body.rank).to.equal(1)
				expect(res.body.number).to.equal(5555)
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})

	it('/rewards/2', (done) => {
		request
			.post('/rewards/2')
			.send({
				number: '6666',
			})
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				expect(res.body.rank).to.equal(2)
				expect(res.body.number).to.equal(6666)
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})

	it('/rewards/3', (done) => {
		request
			.post('/rewards/3')
			.send({
				number: '7777',
			})
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				expect(res.body.rank).to.equal(3)
				expect(res.body.number).to.equal(7777)
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})
})

describe('POST /summarizes', () => {
	it('/summarizes', (done) => {
		request
			.post('/summarizes')
			.send({})
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})
})

describe('GET /buying-periods', () => {
	it('/buying-periods', (done) => {
		request
			.get('/buying-periods')
			.send({
				round: '1',
				number: '1234',
			})
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})
})

describe('POST /buying-periods', () => {
	it('/buying-periods', (done) => {
		request
			.post('/buying-periods')
			.send({
				bool: 'TRUE',
			})
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})
})

describe('POST /next-draws', () => {
	it('/next-draws', (done) => {
		request
			.post('/next-draws')
			.send({
				sec: '1800',
			})
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				expect(res.body.sec).to.equal(1800)
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})
})

describe('POST /before-draws', () => {
	it('/before-draws', (done) => {
		request
			.post('/before-draws')
			.send({
				sec: '1800',
			})
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				expect(res.body.sec).to.equal(1800)
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})
})

describe('POST /random-rewards', () => {
	it('/random-rewards', (done) => {
		request
			.post('/random-rewards')
			.expect(200)
			.then((res) => {
				expect(res.body.status).to.equal('success')
				expect(res.body.random).to.equal('true')
				done()
			})
			.catch((error) => {
				console.error(error)
				done()
			})
	})
})
