"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stage = require("lib/ren2/stage.class");

var _stage2 = _interopRequireDefault(_stage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2StageFactory = function () {
    function StandardRen2StageFactory() {
        _classCallCheck(this, StandardRen2StageFactory);
    }

    _createClass(StandardRen2StageFactory, [{
        key: "construct",
        value: function construct(models) {
            return new _stage2.default(models);
        }
    }]);

    return StandardRen2StageFactory;
}();

exports.default = StandardRen2StageFactory;