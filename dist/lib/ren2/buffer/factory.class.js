"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buffer = require("lib/ren2/buffer.class");

var _buffer2 = _interopRequireDefault(_buffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2BufferFactory = function () {
    function StandardRen2BufferFactory() {
        _classCallCheck(this, StandardRen2BufferFactory);
    }

    _createClass(StandardRen2BufferFactory, [{
        key: "construct",
        value: function construct(indexBuffer, indexCount, layer, location, positionBuffer, texture, textureCoordinateBuffer, webglRenderingContext) {
            return new _buffer2.default(indexBuffer, indexCount, layer, location, positionBuffer, texture, textureCoordinateBuffer, webglRenderingContext);
        }
    }]);

    return StandardRen2BufferFactory;
}();

exports.default = StandardRen2BufferFactory;