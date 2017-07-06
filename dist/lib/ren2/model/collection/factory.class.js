"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require("lib/ren2/model/collection.class");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ModelColletionFactory = function () {
    function StandardRen2ModelColletionFactory() {
        _classCallCheck(this, StandardRen2ModelColletionFactory);
    }

    _createClass(StandardRen2ModelColletionFactory, [{
        key: "construct",
        value: function construct() {
            return new _collection2.default();
        }
    }]);

    return StandardRen2ModelColletionFactory;
}();

exports.default = StandardRen2ModelColletionFactory;