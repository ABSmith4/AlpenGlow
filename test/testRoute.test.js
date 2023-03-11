// eslint-disable-next-line import/extensions
import { expect, server, BASE_URL } from './setup.js';

describe('Test route test', () => {
  it('test url route', done => {
    server
      .get(`${BASE_URL}/v1/test/1`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Welcome to the AlpenGlow API'
        );
        done();
      });
  });
});
