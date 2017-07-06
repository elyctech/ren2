"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _triangle = require("lib/ren2/triangle.class");

var _triangle2 = _interopRequireDefault(_triangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2TriangleFactory = function () {
    function StandardRen2TriangleFactory() {
        _classCallCheck(this, StandardRen2TriangleFactory);
    }

    _createClass(StandardRen2TriangleFactory, [{
        key: "construct",
        value: function construct(vertex1, vertex2, vertex3) {
            return new _triangle2.default(vertex1, vertex2, vertex3);
        }
    }]);

    return StandardRen2TriangleFactory;
}();

exports.default = StandardRen2TriangleFactory;