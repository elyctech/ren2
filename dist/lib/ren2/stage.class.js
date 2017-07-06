"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Stage = function () {
    function StandardRen2Stage(models) {
        _classCallCheck(this, StandardRen2Stage);

        this.models = models;
    }

    _createClass(StandardRen2Stage, [{
        key: "addModel",
        value: function addModel(model) {
            this.models.add(model);
            return this;
        }
    }, {
        key: "eachModel",
        value: function eachModel(action) {
            this.models.eachModel(action);
        }
    }]);

    return StandardRen2Stage;
}();

exports.default = StandardRen2Stage;