"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ValidationErrorItem model module.
 * @module dto/ValidationErrorItem
 * @version 0.0.1-SNAPSHOT
 */
var ValidationErrorItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidationErrorItem</code>.
   * 1件ごとのチェックエラー情報
   * @alias module:dto/ValidationErrorItem
   */
  function ValidationErrorItem() {
    _classCallCheck(this, ValidationErrorItem);

    ValidationErrorItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidationErrorItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ValidationErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:dto/ValidationErrorItem} obj Optional instance to populate.
     * @return {module:dto/ValidationErrorItem} The populated <code>ValidationErrorItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidationErrorItem();

        if (data.hasOwnProperty('fieldName')) {
          obj['fieldName'] = _ApiClient["default"].convertToType(data['fieldName'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ValidationErrorItem;
}();
/**
 * エラーとなった項目
 * @member {String} fieldName
 */


ValidationErrorItem.prototype['fieldName'] = undefined;
/**
 * エラーメッセージ
 * @member {String} message
 */

ValidationErrorItem.prototype['message'] = undefined;
var _default = ValidationErrorItem;
exports["default"] = _default;