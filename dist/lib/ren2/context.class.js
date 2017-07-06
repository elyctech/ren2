"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Context = function () {
    function StandardRen2Context(modelRepository, renderer, webglRenderingContext) {
        _classCallCheck(this, StandardRen2Context);

        this.modelRepository = modelRepository;
        this.renderer = renderer;
        this.webglRenderingContext = webglRenderingContext;
    }

    _createClass(StandardRen2Context, [{
        key: "clearCanvas",
        value: function clearCanvas() {
            this.webglRenderingContext.clear(this.webglRenderingContext.COLOR_BUFFER_BIT | this.webglRenderingContext.DEPTH_BUFFER_BIT);
        }
    }, {
        key: "draw",
        value: function draw(stage) {
            var _this = this;

            stage.eachModel(function (model) {
                _this.modelRepository.saveToBuffer(model);
            });
            stage.eachModel(function (model) {
                var buffer = _this.modelRepository.getBuffer(model);
                console.log("Rendering layer " + buffer.getLayer());
                _this.renderer.draw(buffer);
            });
        }
    }]);

    return StandardRen2Context;
}();

exports.default = StandardRen2Context;