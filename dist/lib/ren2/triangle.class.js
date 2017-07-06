"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Triangle = function () {
    function StandardRen2Triangle(vertex1, vertex2, vertex3) {
        _classCallCheck(this, StandardRen2Triangle);

        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    _createClass(StandardRen2Triangle, [{
        key: "getVertex1",
        value: function getVertex1() {
            return this.vertex1;
        }
    }, {
        key: "getVertex2",
        value: function getVertex2() {
            return this.vertex2;
        }
    }, {
        key: "getVertex3",
        value: function getVertex3() {
            return this.vertex3;
        }
    }]);

    return StandardRen2Triangle;
}();

exports.default = StandardRen2Triangle;