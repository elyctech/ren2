"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/ren2/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ServiceFactory = function () {
    function StandardRen2ServiceFactory() {
        _classCallCheck(this, StandardRen2ServiceFactory);
    }

    _createClass(StandardRen2ServiceFactory, [{
        key: "construct",
        value: function construct(canvasContexts, contextFactory, imageRepository, modelCollectionFactory, modelFactory, stageFactory, triangleCollectionFactory, triangleFactory, uint16CollectionFactory, vertexFactory) {
            return new _service2.default(canvasContexts, contextFactory, imageRepository, modelCollectionFactory, modelFactory, stageFactory, triangleCollectionFactory, triangleFactory, uint16CollectionFactory, vertexFactory);
        }
    }]);

    return StandardRen2ServiceFactory;
}();

exports.default = StandardRen2ServiceFactory;