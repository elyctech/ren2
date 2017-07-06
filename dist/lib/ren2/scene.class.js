"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Scene = function () {
    function StandardRen2Scene(modelRepository, webglRenderingContext) {
        _classCallCheck(this, StandardRen2Scene);

        this.modelRepository = modelRepository;
        this.webglRenderingContext = webglRenderingContext;
    }

    _createClass(StandardRen2Scene, [{
        key: "clear",
        value: function clear() {
            this.webglRenderingContext.clear(this.webglRenderingContext.COLOR_BUFFER_BIT | this.webglRenderingContext.DEPTH_BUFFER_BIT);
        }
    }, {
        key: "eachModel",
        value: function eachModel(action) {
            this.modelRepository.eachModel(action);
        }
    }, {
        key: "getWebGLRenderingContext",
        value: function getWebGLRenderingContext() {
            return this.webglRenderingContext;
        }
    }, {
        key: "saveModel",
        value: function saveModel(model) {
            this.modelRepository.save(model);
        }
    }]);

    return StandardRen2Scene;
}();

exports.default = StandardRen2Scene;