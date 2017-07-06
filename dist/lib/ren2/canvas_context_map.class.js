"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2CanvasContextMap = function () {
    function StandardRen2CanvasContextMap() {
        _classCallCheck(this, StandardRen2CanvasContextMap);

        this.canvasContexts = new Map();
    }

    _createClass(StandardRen2CanvasContextMap, [{
        key: "contains",
        value: function contains(canvas) {
            return this.canvasContexts.has(canvas);
        }
    }, {
        key: "get",
        value: function get(canvas) {
            return this.canvasContexts.get(canvas);
        }
    }, {
        key: "set",
        value: function set(canvas, context) {
            this.canvasContexts.set(canvas, context);
        }
    }]);

    return StandardRen2CanvasContextMap;
}();

exports.default = StandardRen2CanvasContextMap;