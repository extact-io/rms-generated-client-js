"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserType = _interopRequireDefault(require("./UserType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AddUserAccountDto model module.
 * @module dto/AddUserAccountDto
 * @version 1.0.0
 */
var AddUserAccountDto = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddUserAccountDto</code>.
   * ユーザ登録用DTO
   * @alias module:dto/AddUserAccountDto
   * @param loginId {String} 
   * @param password {String} 
   * @param userName {String} 
   * @param userType {module:dto/UserType} 
   */
  function AddUserAccountDto(loginId, password, userName, userType) {
    _classCallCheck(this, AddUserAccountDto);

    AddUserAccountDto.initialize(this, loginId, password, userName, userType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddUserAccountDto, null, [{
    key: "initialize",
    value: function initialize(obj, loginId, password, userName, userType) {
      obj['loginId'] = loginId;
      obj['password'] = password;
      obj['userName'] = userName;
      obj['userType'] = userType;
    }
    /**
     * Constructs a <code>AddUserAccountDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/AddUserAccountDto} obj Optional instance to populate.
     * @return {module:dto/AddUserAccountDto} The populated <code>AddUserAccountDto</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddUserAccountDto();

        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _ApiClient["default"].convertToType(data['contact'], 'String');
        }

        if (data.hasOwnProperty('loginId')) {
          obj['loginId'] = _ApiClient["default"].convertToType(data['loginId'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }

        if (data.hasOwnProperty('userName')) {
          obj['userName'] = _ApiClient["default"].convertToType(data['userName'], 'String');
        }

        if (data.hasOwnProperty('userType')) {
          obj['userType'] = _UserType["default"].constructFromObject(data['userType']);
        }
      }

      return obj;
    }
  }]);

  return AddUserAccountDto;
}();
/**
 * @member {String} contact
 */


AddUserAccountDto.prototype['contact'] = undefined;
/**
 * @member {String} loginId
 */

AddUserAccountDto.prototype['loginId'] = undefined;
/**
 * @member {String} password
 */

AddUserAccountDto.prototype['password'] = undefined;
/**
 * @member {String} phoneNumber
 */

AddUserAccountDto.prototype['phoneNumber'] = undefined;
/**
 * @member {String} userName
 */

AddUserAccountDto.prototype['userName'] = undefined;
/**
 * @member {module:dto/UserType} userType
 */

AddUserAccountDto.prototype['userType'] = undefined;
var _default = AddUserAccountDto;
exports["default"] = _default;