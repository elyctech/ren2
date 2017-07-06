"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas_stage_map = require("lib/ren2/canvas_stage_map.class");

var _canvas_stage_map2 = _interopRequireDefault(_canvas_stage_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2CanvasStageMapFactory = function () {
    function StandardRen2CanvasStageMapFactory() {
        _classCallCheck(this, StandardRen2CanvasStageMapFactory);
    }

    _createClass(StandardRen2CanvasStageMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _canvas_stage_map2.default();
        }
    }]);

    return StandardRen2CanvasStageMapFactory;
}();

exports.default = StandardRen2CanvasStageMapFactory;