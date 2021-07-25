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
    describe('State', function() {
      beforeEach(function() {
        instance = LolesportsApi.State;
      });

      it('should create an instance of State', function() {
        // TODO: update the code to test State
        expect(instance).to.be.a('object');
      });

      it('should have the property completed', function() {
        expect(instance).to.have.property('completed');
        expect(instance.completed).to.be("completed");
      });

      it('should have the property unstarted', function() {
        expect(instance).to.have.property('unstarted');
        expect(instance.unstarted).to.be("unstarted");
      });

      it('should have the property inProgress', function() {
        expect(instance).to.have.property('inProgress');
        expect(instance.inProgress).to.be("inProgress");
      });

    });
  });

}));
