/**
 * レンタル予約システム公開API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: -
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
    factory(root.expect, root.@ExtactIoRmsGeneratedClientJs);
  }
}(this, function(expect, @ExtactIoRmsGeneratedClientJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @ExtactIoRmsGeneratedClientJs.AddReservationEventDto();
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

  describe('AddReservationEventDto', function() {
    it('should create an instance of AddReservationEventDto', function() {
      // uncomment below and update the code to test AddReservationEventDto
      //var instance = new @ExtactIoRmsGeneratedClientJs.AddReservationEventDto();
      //expect(instance).to.be.a(@ExtactIoRmsGeneratedClientJs.AddReservationEventDto);
    });

    it('should have the property endDateTime (base name: "endDateTime")', function() {
      // uncomment below and update the code to test the property endDateTime
      //var instance = new @ExtactIoRmsGeneratedClientJs.AddReservationEventDto();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instance = new @ExtactIoRmsGeneratedClientJs.AddReservationEventDto();
      //expect(instance).to.be();
    });

    it('should have the property rentalItemId (base name: "rentalItemId")', function() {
      // uncomment below and update the code to test the property rentalItemId
      //var instance = new @ExtactIoRmsGeneratedClientJs.AddReservationEventDto();
      //expect(instance).to.be();
    });

    it('should have the property startDateTime (base name: "startDateTime")', function() {
      // uncomment below and update the code to test the property startDateTime
      //var instance = new @ExtactIoRmsGeneratedClientJs.AddReservationEventDto();
      //expect(instance).to.be();
    });

    it('should have the property userAccountId (base name: "userAccountId")', function() {
      // uncomment below and update the code to test the property userAccountId
      //var instance = new @ExtactIoRmsGeneratedClientJs.AddReservationEventDto();
      //expect(instance).to.be();
    });

  });

}));