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
    describe('SimpleEvent', function() {
      beforeEach(function() {
        instance = new LolesportsApi.SimpleEvent();
      });

      it('should create an instance of SimpleEvent', function() {
        // TODO: update the code to test SimpleEvent
        expect(instance).to.be.a(LolesportsApi.SimpleEvent);
      });

      it('should have the property startTime (base name: "startTime")', function() {
        // TODO: update the code to test the property startTime
        expect(instance).to.have.property('startTime');
        // expect(instance.startTime).to.be(expectedValueLiteral);
      });

      it('should have the property blockName (base name: "blockName")', function() {
        // TODO: update the code to test the property blockName
        expect(instance).to.have.property('blockName');
        // expect(instance.blockName).to.be(expectedValueLiteral);
      });

      it('should have the property match (base name: "match")', function() {
        // TODO: update the code to test the property match
        expect(instance).to.have.property('match');
        // expect(instance.match).to.be(expectedValueLiteral);
      });

    });
  });

}));