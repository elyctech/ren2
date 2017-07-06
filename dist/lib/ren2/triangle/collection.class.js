"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2TriangleCollection = function () {
    function StandardRen2TriangleCollection() {
        _classCallCheck(this, StandardRen2TriangleCollection);

        this.triangles = new Array();
    }

    _createClass(StandardRen2TriangleCollection, [{
        key: "add",
        value: function add(triangle) {
            this.triangles.push(triangle);
        }
    }, {
        key: "count",
        value: function count() {
            return this.triangles.length;
        }
    }, {
        key: "eachTriangle",
        value: function eachTriangle(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.triangles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var triangle = _step.value;

                    action(triangle);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "get",
        value: function get(index) {
            return this.triangles[index];
        }
    }]);

    return StandardRen2TriangleCollection;
}();

exports.default = StandardRen2TriangleCollection;