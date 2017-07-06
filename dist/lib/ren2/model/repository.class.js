"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO Consider renaming this? Ren2ModelRepository? Similar to how UserRepository saves users to the database.
var StandardRen2ModelRepository = function () {
    function StandardRen2ModelRepository(bufferFactory, modelBufferMap, webglRenderingContext) {
        _classCallCheck(this, StandardRen2ModelRepository);

        this.bufferFactory = bufferFactory;
        this.modelBufferMap = modelBufferMap;
        this.webglRenderingContext = webglRenderingContext;
        this.highestLayer = 1;
    }

    _createClass(StandardRen2ModelRepository, [{
        key: "containsBuffer",
        value: function containsBuffer(model) {
            return this.modelBufferMap.contains(model);
        }
    }, {
        key: "getBuffer",
        value: function getBuffer(model) {
            var buffer = void 0;
            if (this.modelBufferMap.contains(model)) {
                buffer = this.modelBufferMap.get(model);
            } else {
                throw "No buffer for model";
            }
            return buffer;
        }
    }, {
        key: "saveToBuffer",
        value: function saveToBuffer(model) {
            var _this = this;

            var buffer = void 0;
            // TODO This should be divided up into a create and save method. The create would initialize a buffer with all of
            //      the necessary data while this would simply save the data to an existing buffer.
            if (this.modelBufferMap.contains(model)) {
                buffer = this.modelBufferMap.get(model);
            } else {
                // TODO Consider also having this in a create method for a performance boost. Then, consider if this should save
                //      any model not created from this instance. If not, this would throw an error instead of creating a new
                //      buffer.
                buffer = this.bufferFactory.construct(this.webglRenderingContext.createBuffer(), 0, 1, Float32Array.from([0, 0]), this.webglRenderingContext.createBuffer(),
                // TODO Do not create redundant textures. A texture repository would help with this
                this.webglRenderingContext.createTexture(), this.webglRenderingContext.createBuffer(), this.webglRenderingContext);
                this.modelBufferMap.set(model, buffer);
            }
            // TODO Find a way to efficiently determine if rebuffering is necessary. Best I can think of is an event system.
            //      Maybe this will not be a performance issue?
            buffer.setIndices(model.getIndices().asArray());
            // Keep track of highest layer
            var layer = model.getLayer();
            if (layer > this.highestLayer) {
                this.highestLayer = layer;
                this.modelBufferMap.each(function (model, buffer) {
                    buffer.setLayer(-1.9 * model.getLayer() / _this.highestLayer + 0.95);
                });
            }
            buffer.setLayer(
            // WebGL has negative values closer than positive values
            // TODO Highest-layer algorithm prone to pushing Z values to the extremes if there is an exetreme difference
            //      between layer values. Is this a problem?
            -1.9 * layer / this.highestLayer + 0.95);
            // buffer.setLayer(
            //   -layer
            // );
            buffer.setLocation(model.getLocationX(), model.getLocationY());
            buffer.setPositions(model.getPositions());
            // TODO To avoid redundant textures, this API will need to change
            buffer.setTextureImage(model.getTextureImage());
            buffer.setTextureCoordinates(model.getTextureCoordinates());
            return buffer;
        }
    }]);

    return StandardRen2ModelRepository;
}();

exports.default = StandardRen2ModelRepository;