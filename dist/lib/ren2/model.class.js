"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Model = function () {
    function StandardRen2Model(indices, layer, locationX, locationY, textureImage, triangleCollection, triangleFactory) {
        _classCallCheck(this, StandardRen2Model);

        this.indices = indices;
        this.layer = layer;
        this.locationX = locationX;
        this.locationY = locationY;
        this.textureImage = textureImage;
        this.triangleCollection = triangleCollection;
        this.triangleFactory = triangleFactory;
    }

    _createClass(StandardRen2Model, [{
        key: "addTriangle",
        value: function addTriangle(vertex1, vertex2, vertex3) {
            var indexCount = this.indices.count(),
                triangle = this.triangleFactory.construct(vertex1, vertex2, vertex3);
            this.indices.add(indexCount);
            this.indices.add(indexCount + 1);
            this.indices.add(indexCount + 2);
            this.triangleCollection.add(triangle);
            return this;
        }
    }, {
        key: "getIndices",
        value: function getIndices() {
            return this.indices;
        }
    }, {
        key: "getLayer",
        value: function getLayer() {
            return this.layer;
        }
    }, {
        key: "getLocationX",
        value: function getLocationX() {
            return this.locationX;
        }
    }, {
        key: "getLocationY",
        value: function getLocationY() {
            return this.locationY;
        }
    }, {
        key: "getPositions",
        value: function getPositions() {
            var positions = new Array();
            this.triangleCollection.eachTriangle(function (triangle) {
                var vertex1 = triangle.getVertex1(),
                    vertex2 = triangle.getVertex2(),
                    vertex3 = triangle.getVertex3();
                positions.push(vertex1.getPositionX(), vertex1.getPositionY(), vertex2.getPositionX(), vertex2.getPositionY(), vertex3.getPositionX(), vertex3.getPositionY());
            });
            return Float32Array.from(positions);
        }
    }, {
        key: "getTextureImage",
        value: function getTextureImage() {
            return this.textureImage;
        }
    }, {
        key: "getTriangle",
        value: function getTriangle(index) {
            return this.triangleCollection.get(index);
        }
    }, {
        key: "getTextureCoordinates",
        value: function getTextureCoordinates() {
            var textureCoordinates = new Array();
            this.triangleCollection.eachTriangle(function (triangle) {
                var vertex1 = triangle.getVertex1(),
                    vertex2 = triangle.getVertex2(),
                    vertex3 = triangle.getVertex3();
                textureCoordinates.push(vertex1.getTextureCoordinateS(), vertex1.getTextureCoordinateT(), vertex2.getTextureCoordinateS(), vertex2.getTextureCoordinateT(), vertex3.getTextureCoordinateS(), vertex3.getTextureCoordinateT());
            });
            return Float32Array.from(textureCoordinates);
        }
    }]);

    return StandardRen2Model;
}();

exports.default = StandardRen2Model;