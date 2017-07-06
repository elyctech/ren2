"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Vertex = function () {
    function StandardRen2Vertex(positionX, positionY, textureCoordinateS, textureCoordinateT) {
        _classCallCheck(this, StandardRen2Vertex);

        this.positionX = positionX;
        this.positionY = positionY;
        this.textureCoordinateS = textureCoordinateS;
        this.textureCoordinateT = textureCoordinateT;
    }

    _createClass(StandardRen2Vertex, [{
        key: "getPositionX",
        value: function getPositionX() {
            return this.positionX;
        }
    }, {
        key: "getPositionY",
        value: function getPositionY() {
            return this.positionY;
        }
    }, {
        key: "getTextureCoordinateS",
        value: function getTextureCoordinateS() {
            return this.textureCoordinateS;
        }
    }, {
        key: "getTextureCoordinateT",
        value: function getTextureCoordinateT() {
            return this.textureCoordinateT;
        }
    }, {
        key: "setTextureCoordinate",
        value: function setTextureCoordinate(textureCoordinateS, textureCoordinateT) {
            this.textureCoordinateS = textureCoordinateS;
            this.textureCoordinateT = textureCoordinateT;
        }
    }]);

    return StandardRen2Vertex;
}();

exports.default = StandardRen2Vertex;