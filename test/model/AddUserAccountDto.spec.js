/**
 * レンタル予約システムの公開API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
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
    instance = new RmsGeneratedClientJs.AddUserAccountDto();
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

  describe('AddUserAccountDto', function() {
    it('should create an instance of AddUserAccountDto', function() {
      // uncomment below and update the code to test AddUserAccountDto
      //var instance = new RmsGeneratedClientJs.AddUserAccountDto();
      //expect(instance).to.be.a(RmsGeneratedClientJs.AddUserAccountDto);
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instance = new RmsGeneratedClientJs.AddUserAccountDto();
      //expect(instance).to.be();
    });

    it('should have the property loginId (base name: "loginId")', function() {
      // uncomment below and update the code to test the property loginId
      //var instance = new RmsGeneratedClientJs.AddUserAccountDto();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new RmsGeneratedClientJs.AddUserAccountDto();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new RmsGeneratedClientJs.AddUserAccountDto();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instance = new RmsGeneratedClientJs.AddUserAccountDto();
      //expect(instance).to.be();
    });

    it('should have the property userType (base name: "userType")', function() {
      // uncomment below and update the code to test the property userType
      //var instance = new RmsGeneratedClientJs.AddUserAccountDto();
      //expect(instance).to.be();
    });

  });

}));
