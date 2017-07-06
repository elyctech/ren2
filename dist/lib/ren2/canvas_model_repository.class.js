"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO Consider renaming this? Ren2ModelRepository? Similar to how UserRepository saves users to the database.
var StandardRen2CanvasModelRepository = function () {
    function StandardRen2CanvasModelRepository(bufferFactory, modelBufferMap, webglRenderingContext) {
        _classCallCheck(this, StandardRen2CanvasModelRepository);

        this.bufferFactory = bufferFactory;
        this.modelBufferMap = modelBufferMap;
        this.webglRenderingContext = webglRenderingContext;
    }

    _createClass(StandardRen2CanvasModelRepository, [{
        key: "eachModel",
        value: function eachModel(action) {
            this.modelBufferMap.each(function (model, buffer) {
                action(model, buffer);
            });
        }
    }, {
        key: "save",
        value: function save(model) {
            var buffer = void 0;
            if (this.modelBufferMap.contains(model)) {
                buffer = this.modelBufferMap.get(model);
            } else {
                buffer = this.bufferFactory.construct(this.webglRenderingContext.createBuffer(), 0, Float32Array.from([0, 0]), this.webglRenderingContext.createBuffer(), this.webglRenderingContext.createTexture(), this.webglRenderingContext.createBuffer(), this.webglRenderingContext);
                this.modelBufferMap.set(model, buffer);
            }
            console.log("rebuffering %o", model);
            // TODO Find a way to efficiently determine if rebuffering is necessary. Best I can think of is an event system.
            //      Maybe this will not be a performance issue?
            buffer.setIndices(model.getIndices().asArray());
            buffer.setLocation(model.getLocationX(), model.getLocationY());
            buffer.setPositions(model.getPositions());
            buffer.setTextureImage(model.getTextureImage());
            buffer.setTextureCoordinates(model.getTextureCoordinates());
        }
    }]);

    return StandardRen2CanvasModelRepository;
}();

exports.default = StandardRen2CanvasModelRepository;