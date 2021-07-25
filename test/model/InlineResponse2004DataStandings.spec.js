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
    describe('InlineResponse2004DataStandings', function() {
      beforeEach(function() {
        instance = new LolesportsApi.InlineResponse2004DataStandings();
      });

      it('should create an instance of InlineResponse2004DataStandings', function() {
        // TODO: update the code to test InlineResponse2004DataStandings
        expect(instance).to.be.a(LolesportsApi.InlineResponse2004DataStandings);
      });

      it('should have the property stages (base name: "stages")', function() {
        // TODO: update the code to test the property stages
        expect(instance).to.have.property('stages');
        // expect(instance.stages).to.be(expectedValueLiteral);
      });

    });
  });

}));