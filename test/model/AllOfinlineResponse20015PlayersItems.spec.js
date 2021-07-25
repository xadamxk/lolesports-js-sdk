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
    describe('AllOfinlineResponse20015PlayersItems', function() {
      beforeEach(function() {
        instance = new LolesportsApi.AllOfinlineResponse20015PlayersItems();
      });

      it('should create an instance of AllOfinlineResponse20015PlayersItems', function() {
        // TODO: update the code to test AllOfinlineResponse20015PlayersItems
        expect(instance).to.be.a(LolesportsApi.AllOfinlineResponse20015PlayersItems);
      });

      it('should have the property starterOnTeams (base name: "starterOnTeams")', function() {
        // TODO: update the code to test the property starterOnTeams
        expect(instance).to.have.property('starterOnTeams');
        // expect(instance.starterOnTeams).to.be(expectedValueLiteral);
      });

      it('should have the property subOnTeams (base name: "subOnTeams")', function() {
        // TODO: update the code to test the property subOnTeams
        expect(instance).to.have.property('subOnTeams');
        // expect(instance.subOnTeams).to.be(expectedValueLiteral);
      });

      it('should have the property teams (base name: "teams")', function() {
        // TODO: update the code to test the property teams
        expect(instance).to.have.property('teams');
        // expect(instance.teams).to.be(expectedValueLiteral);
      });

      it('should have the property photoInformation (base name: "photoInformation")', function() {
        // TODO: update the code to test the property photoInformation
        expect(instance).to.have.property('photoInformation');
        // expect(instance.photoInformation).to.be(expectedValueLiteral);
      });

      it('should have the property scheduleItems (base name: "scheduleItems")', function() {
        // TODO: update the code to test the property scheduleItems
        expect(instance).to.have.property('scheduleItems');
        // expect(instance.scheduleItems).to.be(expectedValueLiteral);
      });

      it('should have the property playerStatsSummary (base name: "playerStatsSummary")', function() {
        // TODO: update the code to test the property playerStatsSummary
        expect(instance).to.have.property('playerStatsSummary');
        // expect(instance.playerStatsSummary).to.be(expectedValueLiteral);
      });

      it('should have the property playerStatsHistory (base name: "playerStatsHistory")', function() {
        // TODO: update the code to test the property playerStatsHistory
        expect(instance).to.have.property('playerStatsHistory');
        // expect(instance.playerStatsHistory).to.be(expectedValueLiteral);
      });

    });
  });

}));
