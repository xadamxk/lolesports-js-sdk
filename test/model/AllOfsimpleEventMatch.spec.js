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

  describe('(package)', function() {
    describe('AllOfsimpleEventMatch', function() {
      beforeEach(function() {
        instance = new LolesportsApi.AllOfsimpleEventMatch();
      });

      it('should create an instance of AllOfsimpleEventMatch', function() {
        // TODO: update the code to test AllOfsimpleEventMatch
        expect(instance).to.be.a(LolesportsApi.AllOfsimpleEventMatch);
      });

      it('should have the property strategy (base name: "strategy")', function() {
        // TODO: update the code to test the property strategy
        expect(instance).to.have.property('strategy');
        // expect(instance.strategy).to.be(expectedValueLiteral);
      });

      it('should have the property teams (base name: "teams")', function() {
        // TODO: update the code to test the property teams
        expect(instance).to.have.property('teams');
        // expect(instance.teams).to.be(expectedValueLiteral);
      });

    });
  });

}));
