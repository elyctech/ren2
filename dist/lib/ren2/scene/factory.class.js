"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scene = require("lib/ren2/scene.class");

var _scene2 = _interopRequireDefault(_scene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2SceneFactory = function () {
    function StandardRen2SceneFactory() {
        _classCallCheck(this, StandardRen2SceneFactory);
    }

    _createClass(StandardRen2SceneFactory, [{
        key: "construct",
        value: function construct(modelRepository, webglRenderingContext) {
            return new _scene2.default(modelRepository, webglRenderingContext);
        }
    }]);

    return StandardRen2SceneFactory;
}();

exports.default = StandardRen2SceneFactory;