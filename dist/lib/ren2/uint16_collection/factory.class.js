"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uint16_collection = require("lib/ren2/uint16_collection.class");

var _uint16_collection2 = _interopRequireDefault(_uint16_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Uint16CollectionFactory = function () {
    function StandardRen2Uint16CollectionFactory() {
        _classCallCheck(this, StandardRen2Uint16CollectionFactory);
    }

    _createClass(StandardRen2Uint16CollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _uint16_collection2.default();
        }
    }]);

    return StandardRen2Uint16CollectionFactory;
}();

exports.default = StandardRen2Uint16CollectionFactory;