"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require("lib/ren2/model.class");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ModelFactory = function () {
    function StandardRen2ModelFactory() {
        _classCallCheck(this, StandardRen2ModelFactory);
    }

    _createClass(StandardRen2ModelFactory, [{
        key: "construct",
        value: function construct(indices, layer, locationX, locationY, textureImage, triangleCollection, triangleFactory) {
            return new _model2.default(indices, layer, locationX, locationY, textureImage, triangleCollection, triangleFactory);
        }
    }]);

    return StandardRen2ModelFactory;
}();

exports.default = StandardRen2ModelFactory;