"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas_context_map = require("lib/ren2/canvas_context_map.class");

var _canvas_context_map2 = _interopRequireDefault(_canvas_context_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2CanvasContextMapFactory = function () {
    function StandardRen2CanvasContextMapFactory() {
        _classCallCheck(this, StandardRen2CanvasContextMapFactory);
    }

    _createClass(StandardRen2CanvasContextMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _canvas_context_map2.default();
        }
    }]);

    return StandardRen2CanvasContextMapFactory;
}();

exports.default = StandardRen2CanvasContextMapFactory;