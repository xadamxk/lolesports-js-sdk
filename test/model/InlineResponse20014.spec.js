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
    describe('InlineResponse20014', function() {
      beforeEach(function() {
        instance = new LolesportsApi.InlineResponse20014();
      });

      it('should create an instance of InlineResponse20014', function() {
        // TODO: update the code to test InlineResponse20014
        expect(instance).to.be.a(LolesportsApi.InlineResponse20014);
      });

      it('should have the property players (base name: "players")', function() {
        // TODO: update the code to test the property players
        expect(instance).to.have.property('players');
        // expect(instance.players).to.be(expectedValueLiteral);
      });

      it('should have the property highlanderTournaments (base name: "highlanderTournaments")', function() {
        // TODO: update the code to test the property highlanderTournaments
        expect(instance).to.have.property('highlanderTournaments');
        // expect(instance.highlanderTournaments).to.be(expectedValueLiteral);
      });

      it('should have the property scheduleItems (base name: "scheduleItems")', function() {
        // TODO: update the code to test the property scheduleItems
        expect(instance).to.have.property('scheduleItems');
        // expect(instance.scheduleItems).to.be(expectedValueLiteral);
      });

      it('should have the property teamStatsSummaries (base name: "teamStatsSummaries")', function() {
        // TODO: update the code to test the property teamStatsSummaries
        expect(instance).to.have.property('teamStatsSummaries');
        // expect(instance.teamStatsSummaries).to.be(expectedValueLiteral);
      });

      it('should have the property teamRosterStats (base name: "teamRosterStats")', function() {
        // TODO: update the code to test the property teamRosterStats
        expect(instance).to.have.property('teamRosterStats');
        // expect(instance.teamRosterStats).to.be(expectedValueLiteral);
      });

      it('should have the property teamStatsHistories (base name: "teamStatsHistories")', function() {
        // TODO: update the code to test the property teamStatsHistories
        expect(instance).to.have.property('teamStatsHistories');
        // expect(instance.teamStatsHistories).to.be(expectedValueLiteral);
      });

      it('should have the property teams (base name: "teams")', function() {
        // TODO: update the code to test the property teams
        expect(instance).to.have.property('teams');
        // expect(instance.teams).to.be(expectedValueLiteral);
      });

    });
  });

}));
