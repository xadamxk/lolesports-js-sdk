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
    describe('InlineResponse20014AverageDamageByPosition', function() {
      beforeEach(function() {
        instance = new LolesportsApi.InlineResponse20014AverageDamageByPosition();
      });

      it('should create an instance of InlineResponse20014AverageDamageByPosition', function() {
        // TODO: update the code to test InlineResponse20014AverageDamageByPosition
        expect(instance).to.be.a(LolesportsApi.InlineResponse20014AverageDamageByPosition);
      });

      it('should have the property DUO_CARRY (base name: "DUO_CARRY")', function() {
        // TODO: update the code to test the property DUO_CARRY
        expect(instance).to.have.property('DUO_CARRY');
        // expect(instance.DUO_CARRY).to.be(expectedValueLiteral);
      });

      it('should have the property DUO_SUPPORT (base name: "DUO_SUPPORT")', function() {
        // TODO: update the code to test the property DUO_SUPPORT
        expect(instance).to.have.property('DUO_SUPPORT');
        // expect(instance.DUO_SUPPORT).to.be(expectedValueLiteral);
      });

      it('should have the property SOLO (base name: "SOLO")', function() {
        // TODO: update the code to test the property SOLO
        expect(instance).to.have.property('SOLO');
        // expect(instance.SOLO).to.be(expectedValueLiteral);
      });

      it('should have the property NONE (base name: "NONE")', function() {
        // TODO: update the code to test the property NONE
        expect(instance).to.have.property('NONE');
        // expect(instance.NONE).to.be(expectedValueLiteral);
      });

      it('should have the property DUO (base name: "DUO")', function() {
        // TODO: update the code to test the property DUO
        expect(instance).to.have.property('DUO');
        // expect(instance.DUO).to.be(expectedValueLiteral);
      });

    });
  });

}));
