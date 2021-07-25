/*
 * Lolesports Api
 * Unofficial documentation to the lolesports Api
 *
 * OpenAPI spec version: 1.0.0-alpha-1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.27
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LolesportsApi);
  }
}(this, function(expect, LolesportsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LolesportsApi.HighlanderApi();
  });

  describe('(package)', function() {
    describe('HighlanderApi', function() {
      describe('highlanderTournaments', function() {
        it('should call highlanderTournaments successfully', function(done) {
          // TODO: uncomment, update parameter values for highlanderTournaments call and complete the assertions
          /*

          instance.highlanderTournaments(league, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LolesportsApi.HighlanderTournaments);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('leagues', function() {
        it('should call leagues successfully', function(done) {
          // TODO: uncomment, update parameter values for leagues call and complete the assertions
          /*

          instance.leagues(query, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LolesportsApi.InlineResponse20012);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('navItems', function() {
        it('should call navItems successfully', function(done) {
          // TODO: uncomment navItems call and complete the assertions
          /*

          instance.navItems(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LolesportsApi.InlineResponse20010);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('players', function() {
        it('should call players successfully', function(done) {
          // TODO: uncomment, update parameter values for players call and complete the assertions
          /*

          instance.players(slug, tournament, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LolesportsApi.InlineResponse20015);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('scheduleItems', function() {
        it('should call scheduleItems successfully', function(done) {
          // TODO: uncomment, update parameter values for scheduleItems call and complete the assertions
          /*

          instance.scheduleItems(leagueId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LolesportsApi.InlineResponse20013);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('teams', function() {
        it('should call teams successfully', function(done) {
          // TODO: uncomment, update parameter values for teams call and complete the assertions
          /*

          instance.teams(slug, tournament, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LolesportsApi.InlineResponse20014);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('videos', function() {
        it('should call videos successfully', function(done) {
          // TODO: uncomment videos call and complete the assertions
          /*

          instance.videos(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LolesportsApi.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
