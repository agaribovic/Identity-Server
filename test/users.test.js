const chai = require('chai')
chai.use(require('chai-http'))
chai.should()
import app from '../src/index'

describe('#users', function() {

   describe('/GET users', function() {
        this.timeout(5000)
       it('should return 200', async function() {
           const result = await chai.request(app).get('/api/users')
           console.log(result.status)
           result.should.have.status(200)
       })
   })
})