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
    describe('Window', function() {
      beforeEach(function() {
        instance = new LolesportsApi.Window();
      });

      it('should create an instance of Window', function() {
        // TODO: update the code to test Window
        expect(instance).to.be.a(LolesportsApi.Window);
      });

      it('should have the property esportsGameId (base name: "esportsGameId")', function() {
        // TODO: update the code to test the property esportsGameId
        expect(instance).to.have.property('esportsGameId');
        // expect(instance.esportsGameId).to.be(expectedValueLiteral);
      });

      it('should have the property esportsMatchId (base name: "esportsMatchId")', function() {
        // TODO: update the code to test the property esportsMatchId
        expect(instance).to.have.property('esportsMatchId');
        // expect(instance.esportsMatchId).to.be(expectedValueLiteral);
      });

      it('should have the property gameMetadata (base name: "gameMetadata")', function() {
        // TODO: update the code to test the property gameMetadata
        expect(instance).to.have.property('gameMetadata');
        // expect(instance.gameMetadata).to.be(expectedValueLiteral);
      });

      it('should have the property frames (base name: "frames")', function() {
        // TODO: update the code to test the property frames
        expect(instance).to.have.property('frames');
        // expect(instance.frames).to.be(expectedValueLiteral);
      });

    });
  });

}));
