/**
 * レンタル予約システムの公開API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RmsGeneratedClientJs);
  }
}(this, function(expect, RmsGeneratedClientJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RmsGeneratedClientJs.ValidationErrorInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ValidationErrorInfo', function() {
    it('should create an instance of ValidationErrorInfo', function() {
      // uncomment below and update the code to test ValidationErrorInfo
      //var instance = new RmsGeneratedClientJs.ValidationErrorInfo();
      //expect(instance).to.be.a(RmsGeneratedClientJs.ValidationErrorInfo);
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instance = new RmsGeneratedClientJs.ValidationErrorInfo();
      //expect(instance).to.be();
    });

    it('should have the property errorReason (base name: "errorReason")', function() {
      // uncomment below and update the code to test the property errorReason
      //var instance = new RmsGeneratedClientJs.ValidationErrorInfo();
      //expect(instance).to.be();
    });

    it('should have the property errorItems (base name: "errorItems")', function() {
      // uncomment below and update the code to test the property errorItems
      //var instance = new RmsGeneratedClientJs.ValidationErrorInfo();
      //expect(instance).to.be();
    });

  });

}));
