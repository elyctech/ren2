"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardImageRepository = function () {
    function StandardImageRepository() {
        _classCallCheck(this, StandardImageRepository);

        this.imageMap = new Map();
    }

    _createClass(StandardImageRepository, [{
        key: "containsPath",
        value: function containsPath(path) {
            return this.imageMap.has(path);
        }
    }, {
        key: "getImage",
        value: function getImage(path) {
            return this.imageMap.get(path);
        }
    }, {
        key: "storeImage",
        value: function storeImage(path, image) {
            this.imageMap.set(path, image);
        }
    }]);

    return StandardImageRepository;
}();

exports.default = StandardImageRepository;