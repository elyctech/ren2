"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas_model_repository = require("lib/ren2/canvas_model_repository.class");

var _canvas_model_repository2 = _interopRequireDefault(_canvas_model_repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2CanvasModelRepositoryFactory = function () {
    function StandardRen2CanvasModelRepositoryFactory() {
        _classCallCheck(this, StandardRen2CanvasModelRepositoryFactory);
    }

    _createClass(StandardRen2CanvasModelRepositoryFactory, [{
        key: "construct",
        value: function construct(bufferFactory, modelBufferMap, webglRenderingContext) {
            return new _canvas_model_repository2.default(bufferFactory, modelBufferMap, webglRenderingContext);
        }
    }]);

    return StandardRen2CanvasModelRepositoryFactory;
}();

exports.default = StandardRen2CanvasModelRepositoryFactory;