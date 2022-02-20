"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ValidationErrorItem = _interopRequireDefault(require("./ValidationErrorItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ValidationErrorInfo model module.
 * @module dto/ValidationErrorInfo
 * @version 1.0.0
 */
var ValidationErrorInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidationErrorInfo</code>.
   * パラメータチェックエラー情報
   * @alias module:dto/ValidationErrorInfo
   */
  function ValidationErrorInfo() {
    _classCallCheck(this, ValidationErrorInfo);

    ValidationErrorInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidationErrorInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ValidationErrorInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/ValidationErrorInfo} obj Optional instance to populate.
     * @return {module:dto/ValidationErrorInfo} The populated <code>ValidationErrorInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidationErrorInfo();

        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }

        if (data.hasOwnProperty('errorReason')) {
          obj['errorReason'] = _ApiClient["default"].convertToType(data['errorReason'], 'String');
        }

        if (data.hasOwnProperty('errorItems')) {
          obj['errorItems'] = _ApiClient["default"].convertToType(data['errorItems'], [_ValidationErrorItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ValidationErrorInfo;
}();
/**
 * 発生した例外に設定されていたメッセージ
 * @member {String} errorMessage
 */


ValidationErrorInfo.prototype['errorMessage'] = undefined;
/**
 * エラー理由として発生した例外のクラス名を設定
 * @member {String} errorReason
 */

ValidationErrorInfo.prototype['errorReason'] = undefined;
/**
 * @member {Array.<module:dto/ValidationErrorItem>} errorItems
 */

ValidationErrorInfo.prototype['errorItems'] = undefined;
var _default = ValidationErrorInfo;
exports["default"] = _default;