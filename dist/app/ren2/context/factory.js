"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/context/factory.class");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/ren2/buffer/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/ren2/model_buffer_map/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require("app/ren2/model/repository/factory");

var _factory8 = _interopRequireDefault(_factory7);

var _factory9 = require("app/ren2/renderer/factory");

var _factory10 = _interopRequireDefault(_factory9);

var _factory11 = require("app/ren2/webgl/program/factory");

var _factory12 = _interopRequireDefault(_factory11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2ContextFactory = new _factory2.default(_factory4.default, _factory6.default, _factory8.default, _factory10.default, _factory12.default);
exports.default = ren2ContextFactory;