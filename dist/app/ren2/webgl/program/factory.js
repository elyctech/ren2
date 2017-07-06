"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/webgl/program/factory.class");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/ren2/webgl/shader/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2WebglProgramFactory = new _factory2.default(_factory4.default);
exports.default = ren2WebglProgramFactory;