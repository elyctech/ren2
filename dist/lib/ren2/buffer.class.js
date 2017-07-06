"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Buffer = function () {
    function StandardRen2Buffer(indexBuffer, indexCount, layer, location, positionBuffer, texture, textureCoordinateBuffer, webglRenderingContext) {
        _classCallCheck(this, StandardRen2Buffer);

        this.indexBuffer = indexBuffer;
        this.indexCount = indexCount;
        this.layer = layer;
        this.location = location;
        this.positionBuffer = positionBuffer;
        this.texture = texture;
        this.textureCoordinateBuffer = textureCoordinateBuffer;
        this.webglRenderingContext = webglRenderingContext;
        // TODO Standard texture properties?
        this.webglRenderingContext.bindTexture(this.webglRenderingContext.TEXTURE_2D, this.texture);
        this.webglRenderingContext.texParameteri(this.webglRenderingContext.TEXTURE_2D, this.webglRenderingContext.TEXTURE_MIN_FILTER, this.webglRenderingContext.LINEAR);
        this.webglRenderingContext.texParameteri(this.webglRenderingContext.TEXTURE_2D, this.webglRenderingContext.TEXTURE_WRAP_S, this.webglRenderingContext.REPEAT);
        this.webglRenderingContext.texParameteri(this.webglRenderingContext.TEXTURE_2D, this.webglRenderingContext.TEXTURE_WRAP_T, this.webglRenderingContext.REPEAT);
        this.webglRenderingContext.bindTexture(this.webglRenderingContext.TEXTURE_2D, null);
    }

    _createClass(StandardRen2Buffer, [{
        key: "getIndexBuffer",
        value: function getIndexBuffer() {
            return this.indexBuffer;
        }
    }, {
        key: "getIndexCount",
        value: function getIndexCount() {
            return this.indexCount;
        }
    }, {
        key: "getLayer",
        value: function getLayer() {
            return this.layer;
        }
    }, {
        key: "getLocation",
        value: function getLocation() {
            return this.location;
        }
    }, {
        key: "getPositionBuffer",
        value: function getPositionBuffer() {
            return this.positionBuffer;
        }
    }, {
        key: "getTexture",
        value: function getTexture() {
            return this.texture;
        }
    }, {
        key: "getTextureCoordinateBuffer",
        value: function getTextureCoordinateBuffer() {
            return this.textureCoordinateBuffer;
        }
    }, {
        key: "setIndices",
        value: function setIndices(indices) {
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            this.webglRenderingContext.bufferData(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, indices, this.webglRenderingContext.STATIC_DRAW);
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, null);
            this.indexCount = indices.length;
        }
    }, {
        key: "setLayer",
        value: function setLayer(layer) {
            this.layer = layer;
        }
    }, {
        key: "setLocation",
        value: function setLocation(x, y) {
            this.location[0] = x;
            this.location[1] = y;
        }
    }, {
        key: "setPositions",
        value: function setPositions(positions) {
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, this.positionBuffer);
            this.webglRenderingContext.bufferData(this.webglRenderingContext.ARRAY_BUFFER, positions, this.webglRenderingContext.STATIC_DRAW);
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, null);
        }
    }, {
        key: "setTextureImage",
        value: function setTextureImage(textureImage) {
            this.webglRenderingContext.bindTexture(this.webglRenderingContext.TEXTURE_2D, this.texture);
            this.webglRenderingContext.texImage2D(this.webglRenderingContext.TEXTURE_2D, 0, this.webglRenderingContext.RGBA, this.webglRenderingContext.RGBA, this.webglRenderingContext.UNSIGNED_BYTE, textureImage);
            this.webglRenderingContext.bindTexture(this.webglRenderingContext.TEXTURE_2D, null);
        }
    }, {
        key: "setTextureCoordinates",
        value: function setTextureCoordinates(textureCoordinates) {
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, this.textureCoordinateBuffer);
            this.webglRenderingContext.bufferData(this.webglRenderingContext.ARRAY_BUFFER, textureCoordinates, this.webglRenderingContext.STATIC_DRAW);
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, null);
        }
    }]);

    return StandardRen2Buffer;
}();

exports.default = StandardRen2Buffer;