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
    describe('InlineResponse20015Mostplayedchampions', function() {
      beforeEach(function() {
        instance = new LolesportsApi.InlineResponse20015Mostplayedchampions();
      });

      it('should create an instance of InlineResponse20015Mostplayedchampions', function() {
        // TODO: update the code to test InlineResponse20015Mostplayedchampions
        expect(instance).to.be.a(LolesportsApi.InlineResponse20015Mostplayedchampions);
      });

      it('should have the property championId (base name: "championId")', function() {
        // TODO: update the code to test the property championId
        expect(instance).to.have.property('championId');
        // expect(instance.championId).to.be(expectedValueLiteral);
      });

      it('should have the property wins (base name: "wins")', function() {
        // TODO: update the code to test the property wins
        expect(instance).to.have.property('wins');
        // expect(instance.wins).to.be(expectedValueLiteral);
      });

      it('should have the property losses (base name: "losses")', function() {
        // TODO: update the code to test the property losses
        expect(instance).to.have.property('losses');
        // expect(instance.losses).to.be(expectedValueLiteral);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property kdaRatio (base name: "kdaRatio")', function() {
        // TODO: update the code to test the property kdaRatio
        expect(instance).to.have.property('kdaRatio');
        // expect(instance.kdaRatio).to.be(expectedValueLiteral);
      });

    });
  });

}));
