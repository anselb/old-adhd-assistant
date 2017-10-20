var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('Site', function() {
  it('should have a live landing page', function (done) {
    chai.request('localhost:3000')
      .get('/')
      .end(function (err, res){
        res.status.should.be.equal(200);
        done();
      });
  });
  it('should have a page for creating tasks', function (done) {
    chai.request('localhost:3000')
      .get('/tasks/new')
      .end(function (err, res){
        res.status.should.be.equal(200);
        done();
      });
  });
  it('should have a page for creating behaviors', function (done) {
    chai.request('localhost:3000')
      .get('/behaviors/new')
      .end(function (err, res){
        res.status.should.be.equal(200);
        done();
      });
  });
});
