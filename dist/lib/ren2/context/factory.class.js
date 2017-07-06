"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// TODO Should these be customizable?


var _context = require("lib/ren2/context.class");

var _context2 = _interopRequireDefault(_context);

var _fragment = require("lib/ren2/webgl/shader/source/fragment");

var _fragment2 = _interopRequireDefault(_fragment);

var _vertex = require("lib/ren2/webgl/shader/source/vertex");

var _vertex2 = _interopRequireDefault(_vertex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ContextFactory = function () {
    function StandardRen2ContextFactory(bufferFactory, modelBufferMapFactory, modelRepositoryFactory, rendererFactory, webglProgramFactory) {
        _classCallCheck(this, StandardRen2ContextFactory);

        this.bufferFactory = bufferFactory;
        this.modelBufferMapFactory = modelBufferMapFactory;
        this.modelRepositoryFactory = modelRepositoryFactory;
        this.rendererFactory = rendererFactory;
        this.webglProgramFactory = webglProgramFactory;
    }

    _createClass(StandardRen2ContextFactory, [{
        key: "construct",
        value: function construct(canvas) {
            var webglRenderingContext = canvas.getContext("webgl");
            var webglProgram = this.webglProgramFactory.construct(_fragment2.default, _vertex2.default, webglRenderingContext);
            var modelRepository = this.modelRepositoryFactory.construct(this.bufferFactory, this.modelBufferMapFactory.construct(), webglRenderingContext),
                renderer = this.rendererFactory.construct(webglProgram, webglRenderingContext);
            return new _context2.default(modelRepository, renderer, webglRenderingContext);
        }
    }]);

    return StandardRen2ContextFactory;
}();

exports.default = StandardRen2ContextFactory;