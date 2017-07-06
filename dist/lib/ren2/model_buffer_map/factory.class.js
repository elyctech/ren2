"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model_buffer_map = require("lib/ren2/model_buffer_map.class");

var _model_buffer_map2 = _interopRequireDefault(_model_buffer_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ModelBufferMapFactory = function () {
    function StandardRen2ModelBufferMapFactory() {
        _classCallCheck(this, StandardRen2ModelBufferMapFactory);
    }

    _createClass(StandardRen2ModelBufferMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _model_buffer_map2.default();
        }
    }]);

    return StandardRen2ModelBufferMapFactory;
}();

exports.default = StandardRen2ModelBufferMapFactory;