"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require("lib/ren2/renderer.class");

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2RendererFactory = function () {
    function StandardRen2RendererFactory() {
        _classCallCheck(this, StandardRen2RendererFactory);
    }

    _createClass(StandardRen2RendererFactory, [{
        key: "construct",
        value: function construct(webglProgram, webglRenderingContext) {
            return new _renderer2.default(webglProgram, webglRenderingContext);
        }
    }]);

    return StandardRen2RendererFactory;
}();

exports.default = StandardRen2RendererFactory;