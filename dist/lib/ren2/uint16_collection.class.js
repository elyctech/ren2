"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Uint16Collection = function () {
    function StandardRen2Uint16Collection() {
        _classCallCheck(this, StandardRen2Uint16Collection);

        this.numbers = new Array();
    }

    _createClass(StandardRen2Uint16Collection, [{
        key: "add",
        value: function add(uint16) {
            this.numbers.push(uint16);
            this.changed = true;
        }
    }, {
        key: "asArray",
        value: function asArray() {
            return Uint16Array.from(this.numbers);
        }
    }, {
        key: "count",
        value: function count() {
            return this.numbers.length;
        }
    }, {
        key: "hasChanged",
        value: function hasChanged() {
            return this.changed;
        }
    }, {
        key: "resetChanged",
        value: function resetChanged() {
            this.changed = false;
        }
    }]);

    return StandardRen2Uint16Collection;
}();

exports.default = StandardRen2Uint16Collection;