"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vertex = require("lib/ren2/vertex.class");

var _vertex2 = _interopRequireDefault(_vertex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2VertexFactory = function () {
    function StandardRen2VertexFactory() {
        _classCallCheck(this, StandardRen2VertexFactory);
    }

    _createClass(StandardRen2VertexFactory, [{
        key: "construct",
        value: function construct(xPosition, yPosition, uTextureCoordinate, vTextureCoordinate) {
            return new _vertex2.default(xPosition, yPosition, uTextureCoordinate, vTextureCoordinate);
        }
    }]);

    return StandardRen2VertexFactory;
}();

exports.default = StandardRen2VertexFactory;