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
    describe('ExtendedTeam', function() {
      beforeEach(function() {
        instance = new LolesportsApi.ExtendedTeam();
      });

      it('should create an instance of ExtendedTeam', function() {
        // TODO: update the code to test ExtendedTeam
        expect(instance).to.be.a(LolesportsApi.ExtendedTeam);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property slug (base name: "slug")', function() {
        // TODO: update the code to test the property slug
        expect(instance).to.have.property('slug');
        // expect(instance.slug).to.be(expectedValueLiteral);
      });

      it('should have the property alternativeImage (base name: "alternativeImage")', function() {
        // TODO: update the code to test the property alternativeImage
        expect(instance).to.have.property('alternativeImage');
        // expect(instance.alternativeImage).to.be(expectedValueLiteral);
      });

      it('should have the property homeLeague (base name: "homeLeague")', function() {
        // TODO: update the code to test the property homeLeague
        expect(instance).to.have.property('homeLeague');
        // expect(instance.homeLeague).to.be(expectedValueLiteral);
      });

      it('should have the property players (base name: "players")', function() {
        // TODO: update the code to test the property players
        expect(instance).to.have.property('players');
        // expect(instance.players).to.be(expectedValueLiteral);
      });

    });
  });

}));
