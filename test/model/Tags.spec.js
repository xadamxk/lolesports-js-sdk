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
    describe('Tags', function() {
      beforeEach(function() {
        instance = new LolesportsApi.Tags();
      });

      it('should create an instance of Tags', function() {
        // TODO: update the code to test Tags
        expect(instance).to.be.a(LolesportsApi.Tags);
      });

      it('should have the property subBlockLabel (base name: "subBlockLabel")', function() {
        // TODO: update the code to test the property subBlockLabel
        expect(instance).to.have.property('subBlockLabel');
        // expect(instance.subBlockLabel).to.be(expectedValueLiteral);
      });

      it('should have the property blockLabel (base name: "blockLabel")', function() {
        // TODO: update the code to test the property blockLabel
        expect(instance).to.have.property('blockLabel');
        // expect(instance.blockLabel).to.be(expectedValueLiteral);
      });

      it('should have the property leagueLabel (base name: "leagueLabel")', function() {
        // TODO: update the code to test the property leagueLabel
        expect(instance).to.have.property('leagueLabel');
        // expect(instance.leagueLabel).to.be(expectedValueLiteral);
      });

      it('should have the property blockPrefix (base name: "blockPrefix")', function() {
        // TODO: update the code to test the property blockPrefix
        expect(instance).to.have.property('blockPrefix');
        // expect(instance.blockPrefix).to.be(expectedValueLiteral);
      });

      it('should have the property subBlockPrefix (base name: "subBlockPrefix")', function() {
        // TODO: update the code to test the property subBlockPrefix
        expect(instance).to.have.property('subBlockPrefix');
        // expect(instance.subBlockPrefix).to.be(expectedValueLiteral);
      });

      it('should have the property yearLabel (base name: "yearLabel")', function() {
        // TODO: update the code to test the property yearLabel
        expect(instance).to.have.property('yearLabel');
        // expect(instance.yearLabel).to.be(expectedValueLiteral);
      });

      it('should have the property stageLabel (base name: "stageLabel")', function() {
        // TODO: update the code to test the property stageLabel
        expect(instance).to.have.property('stageLabel');
        // expect(instance.stageLabel).to.be(expectedValueLiteral);
      });

      it('should have the property tournamentLabel (base name: "tournamentLabel")', function() {
        // TODO: update the code to test the property tournamentLabel
        expect(instance).to.have.property('tournamentLabel');
        // expect(instance.tournamentLabel).to.be(expectedValueLiteral);
      });

    });
  });

}));
