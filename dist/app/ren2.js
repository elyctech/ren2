"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/ren2/canvas_context_map/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/ren2/context/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/ren2/image_repository/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require("app/ren2/model/collection/factory");

var _factory8 = _interopRequireDefault(_factory7);

var _factory9 = require("app/ren2/model/factory");

var _factory10 = _interopRequireDefault(_factory9);

var _factory11 = require("app/ren2/service/factory");

var _factory12 = _interopRequireDefault(_factory11);

var _factory13 = require("app/ren2/stage/factory");

var _factory14 = _interopRequireDefault(_factory13);

var _factory15 = require("app/ren2/triangle/collection/factory");

var _factory16 = _interopRequireDefault(_factory15);

var _factory17 = require("app/ren2/triangle/factory");

var _factory18 = _interopRequireDefault(_factory17);

var _factory19 = require("app/ren2/uint16_collection/factory");

var _factory20 = _interopRequireDefault(_factory19);

var _factory21 = require("app/ren2/vertex/factory");

var _factory22 = _interopRequireDefault(_factory21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2Service = _factory12.default.construct(_factory2.default.construct(), _factory4.default, _factory6.default.construct(), _factory8.default, _factory10.default, _factory14.default, _factory16.default, _factory18.default, _factory20.default, _factory22.default);
exports.default = ren2Service;