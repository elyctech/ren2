(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"app/ren2/canvas_context_map/factory":3,"app/ren2/context/factory":4,"app/ren2/image_repository/factory":5,"app/ren2/model/collection/factory":6,"app/ren2/model/factory":7,"app/ren2/service/factory":11,"app/ren2/stage/factory":12,"app/ren2/triangle/collection/factory":13,"app/ren2/triangle/factory":14,"app/ren2/uint16_collection/factory":15,"app/ren2/vertex/factory":16}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/buffer/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2BufferFactory = new _factory2.default();
exports.default = ren2BufferFactory;
},{"lib/ren2/buffer/factory.class":21}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/canvas_context_map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2CanvasContextMapFactory = new _factory2.default();
exports.default = ren2CanvasContextMapFactory;
},{"lib/ren2/canvas_context_map/factory.class":23}],4:[function(require,module,exports){
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
},{"app/ren2/buffer/factory":2,"app/ren2/model/repository/factory":8,"app/ren2/model_buffer_map/factory":9,"app/ren2/renderer/factory":10,"app/ren2/webgl/program/factory":17,"lib/ren2/context/factory.class":25}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/image_repository/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageRepositoryFactory = new _factory2.default();
exports.default = imageRepositoryFactory;
},{"lib/ren2/image_repository/factory.class":27}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/model/collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2ModelCollectionFactory = new _factory2.default();
exports.default = ren2ModelCollectionFactory;
},{"lib/ren2/model/collection/factory.class":30}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/model/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2ModelFactory = new _factory2.default();
exports.default = ren2ModelFactory;
},{"lib/ren2/model/factory.class":31}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/model/repository/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2CanvasModelRepositoryFactory = new _factory2.default();
exports.default = ren2CanvasModelRepositoryFactory;
},{"lib/ren2/model/repository/factory.class":33}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/model_buffer_map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2ModelBufferMapFactory = new _factory2.default();
exports.default = ren2ModelBufferMapFactory;
},{"lib/ren2/model_buffer_map/factory.class":35}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/renderer/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2RendererFactory = new _factory2.default();
exports.default = ren2RendererFactory;
},{"lib/ren2/renderer/factory.class":37}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2ServiceFactory = new _factory2.default();
exports.default = ren2ServiceFactory;
},{"lib/ren2/service/factory.class":39}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/stage/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2StageFactory = new _factory2.default();
exports.default = ren2StageFactory;
},{"lib/ren2/stage/factory.class":41}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/triangle/collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2TriangleCollectionFactory = new _factory2.default();
exports.default = ren2TriangleCollectionFactory;
},{"lib/ren2/triangle/collection/factory.class":44}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/triangle/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2TriangleFactory = new _factory2.default();
exports.default = ren2TriangleFactory;
},{"lib/ren2/triangle/factory.class":45}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/uint16_collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2Uint16CollectionFactory = new _factory2.default();
exports.default = ren2Uint16CollectionFactory;
},{"lib/ren2/uint16_collection/factory.class":47}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/vertex/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2VertexFactory = new _factory2.default();
exports.default = ren2VertexFactory;
},{"lib/ren2/vertex/factory.class":49}],17:[function(require,module,exports){
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
},{"app/ren2/webgl/shader/factory":18,"lib/ren2/webgl/program/factory.class":50}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/ren2/webgl/shader/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ren2WebglShaderFactory = new _factory2.default();
exports.default = ren2WebglShaderFactory;
},{"lib/ren2/webgl/shader/factory.class":51}],19:[function(require,module,exports){
"use strict";

var _ren = require("app/ren2");

var _ren2 = _interopRequireDefault(_ren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.ren2 = _ren2.default;
},{"app/ren2":1}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Buffer = function () {
    function StandardRen2Buffer(indexBuffer, indexCount, layer, location, positionBuffer, texture, textureCoordinateBuffer, webglRenderingContext) {
        _classCallCheck(this, StandardRen2Buffer);

        this.indexBuffer = indexBuffer;
        this.indexCount = indexCount;
        this.layer = layer;
        this.location = location;
        this.positionBuffer = positionBuffer;
        this.texture = texture;
        this.textureCoordinateBuffer = textureCoordinateBuffer;
        this.webglRenderingContext = webglRenderingContext;
        // TODO Standard texture properties?
        this.webglRenderingContext.bindTexture(this.webglRenderingContext.TEXTURE_2D, this.texture);
        this.webglRenderingContext.texParameteri(this.webglRenderingContext.TEXTURE_2D, this.webglRenderingContext.TEXTURE_MIN_FILTER, this.webglRenderingContext.LINEAR);
        this.webglRenderingContext.texParameteri(this.webglRenderingContext.TEXTURE_2D, this.webglRenderingContext.TEXTURE_WRAP_S, this.webglRenderingContext.REPEAT);
        this.webglRenderingContext.texParameteri(this.webglRenderingContext.TEXTURE_2D, this.webglRenderingContext.TEXTURE_WRAP_T, this.webglRenderingContext.REPEAT);
        this.webglRenderingContext.bindTexture(this.webglRenderingContext.TEXTURE_2D, null);
    }

    _createClass(StandardRen2Buffer, [{
        key: "getIndexBuffer",
        value: function getIndexBuffer() {
            return this.indexBuffer;
        }
    }, {
        key: "getIndexCount",
        value: function getIndexCount() {
            return this.indexCount;
        }
    }, {
        key: "getLayer",
        value: function getLayer() {
            return this.layer;
        }
    }, {
        key: "getLocation",
        value: function getLocation() {
            return this.location;
        }
    }, {
        key: "getPositionBuffer",
        value: function getPositionBuffer() {
            return this.positionBuffer;
        }
    }, {
        key: "getTexture",
        value: function getTexture() {
            return this.texture;
        }
    }, {
        key: "getTextureCoordinateBuffer",
        value: function getTextureCoordinateBuffer() {
            return this.textureCoordinateBuffer;
        }
    }, {
        key: "setIndices",
        value: function setIndices(indices) {
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            this.webglRenderingContext.bufferData(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, indices, this.webglRenderingContext.STATIC_DRAW);
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, null);
            this.indexCount = indices.length;
        }
    }, {
        key: "setLayer",
        value: function setLayer(layer) {
            this.layer = layer;
        }
    }, {
        key: "setLocation",
        value: function setLocation(x, y) {
            this.location[0] = x;
            this.location[1] = y;
        }
    }, {
        key: "setPositions",
        value: function setPositions(positions) {
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, this.positionBuffer);
            this.webglRenderingContext.bufferData(this.webglRenderingContext.ARRAY_BUFFER, positions, this.webglRenderingContext.STATIC_DRAW);
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, null);
        }
    }, {
        key: "setTextureImage",
        value: function setTextureImage(textureImage) {
            this.webglRenderingContext.bindTexture(this.webglRenderingContext.TEXTURE_2D, this.texture);
            this.webglRenderingContext.texImage2D(this.webglRenderingContext.TEXTURE_2D, 0, this.webglRenderingContext.RGBA, this.webglRenderingContext.RGBA, this.webglRenderingContext.UNSIGNED_BYTE, textureImage);
            this.webglRenderingContext.bindTexture(this.webglRenderingContext.TEXTURE_2D, null);
        }
    }, {
        key: "setTextureCoordinates",
        value: function setTextureCoordinates(textureCoordinates) {
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, this.textureCoordinateBuffer);
            this.webglRenderingContext.bufferData(this.webglRenderingContext.ARRAY_BUFFER, textureCoordinates, this.webglRenderingContext.STATIC_DRAW);
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, null);
        }
    }]);

    return StandardRen2Buffer;
}();

exports.default = StandardRen2Buffer;
},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buffer = require("lib/ren2/buffer.class");

var _buffer2 = _interopRequireDefault(_buffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2BufferFactory = function () {
    function StandardRen2BufferFactory() {
        _classCallCheck(this, StandardRen2BufferFactory);
    }

    _createClass(StandardRen2BufferFactory, [{
        key: "construct",
        value: function construct(indexBuffer, indexCount, layer, location, positionBuffer, texture, textureCoordinateBuffer, webglRenderingContext) {
            return new _buffer2.default(indexBuffer, indexCount, layer, location, positionBuffer, texture, textureCoordinateBuffer, webglRenderingContext);
        }
    }]);

    return StandardRen2BufferFactory;
}();

exports.default = StandardRen2BufferFactory;
},{"lib/ren2/buffer.class":20}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2CanvasContextMap = function () {
    function StandardRen2CanvasContextMap() {
        _classCallCheck(this, StandardRen2CanvasContextMap);

        this.canvasContexts = new Map();
    }

    _createClass(StandardRen2CanvasContextMap, [{
        key: "contains",
        value: function contains(canvas) {
            return this.canvasContexts.has(canvas);
        }
    }, {
        key: "get",
        value: function get(canvas) {
            return this.canvasContexts.get(canvas);
        }
    }, {
        key: "set",
        value: function set(canvas, context) {
            this.canvasContexts.set(canvas, context);
        }
    }]);

    return StandardRen2CanvasContextMap;
}();

exports.default = StandardRen2CanvasContextMap;
},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas_context_map = require("lib/ren2/canvas_context_map.class");

var _canvas_context_map2 = _interopRequireDefault(_canvas_context_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2CanvasContextMapFactory = function () {
    function StandardRen2CanvasContextMapFactory() {
        _classCallCheck(this, StandardRen2CanvasContextMapFactory);
    }

    _createClass(StandardRen2CanvasContextMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _canvas_context_map2.default();
        }
    }]);

    return StandardRen2CanvasContextMapFactory;
}();

exports.default = StandardRen2CanvasContextMapFactory;
},{"lib/ren2/canvas_context_map.class":22}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Context = function () {
    function StandardRen2Context(modelRepository, renderer, webglRenderingContext) {
        _classCallCheck(this, StandardRen2Context);

        this.modelRepository = modelRepository;
        this.renderer = renderer;
        this.webglRenderingContext = webglRenderingContext;
    }

    _createClass(StandardRen2Context, [{
        key: "clearCanvas",
        value: function clearCanvas() {
            this.webglRenderingContext.clear(this.webglRenderingContext.COLOR_BUFFER_BIT | this.webglRenderingContext.DEPTH_BUFFER_BIT);
        }
    }, {
        key: "draw",
        value: function draw(stage) {
            var _this = this;

            stage.eachModel(function (model) {
                _this.modelRepository.saveToBuffer(model);
            });
            stage.eachModel(function (model) {
                var buffer = _this.modelRepository.getBuffer(model);
                console.log("Rendering layer " + buffer.getLayer());
                _this.renderer.draw(buffer);
            });
        }
    }]);

    return StandardRen2Context;
}();

exports.default = StandardRen2Context;
},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// TODO Should these be customizable?


var _context = require("lib/ren2/context.class");

var _context2 = _interopRequireDefault(_context);

var _fragment = require("lib/ren2/webgl/shader/source/fragment");

var _fragment2 = _interopRequireDefault(_fragment);

var _vertex = require("lib/ren2/webgl/shader/source/vertex");

var _vertex2 = _interopRequireDefault(_vertex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ContextFactory = function () {
    function StandardRen2ContextFactory(bufferFactory, modelBufferMapFactory, modelRepositoryFactory, rendererFactory, webglProgramFactory) {
        _classCallCheck(this, StandardRen2ContextFactory);

        this.bufferFactory = bufferFactory;
        this.modelBufferMapFactory = modelBufferMapFactory;
        this.modelRepositoryFactory = modelRepositoryFactory;
        this.rendererFactory = rendererFactory;
        this.webglProgramFactory = webglProgramFactory;
    }

    _createClass(StandardRen2ContextFactory, [{
        key: "construct",
        value: function construct(canvas) {
            var webglRenderingContext = canvas.getContext("webgl");
            var webglProgram = this.webglProgramFactory.construct(_fragment2.default, _vertex2.default, webglRenderingContext);
            var modelRepository = this.modelRepositoryFactory.construct(this.bufferFactory, this.modelBufferMapFactory.construct(), webglRenderingContext),
                renderer = this.rendererFactory.construct(webglProgram, webglRenderingContext);
            return new _context2.default(modelRepository, renderer, webglRenderingContext);
        }
    }]);

    return StandardRen2ContextFactory;
}();

exports.default = StandardRen2ContextFactory;
},{"lib/ren2/context.class":24,"lib/ren2/webgl/shader/source/fragment":52,"lib/ren2/webgl/shader/source/vertex":53}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _image_repository = require("lib/ren2/image_repository.class");

var _image_repository2 = _interopRequireDefault(_image_repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardImageRepositoryFactory = function () {
    function StandardImageRepositoryFactory() {
        _classCallCheck(this, StandardImageRepositoryFactory);
    }

    _createClass(StandardImageRepositoryFactory, [{
        key: "construct",
        value: function construct() {
            return new _image_repository2.default();
        }
    }]);

    return StandardImageRepositoryFactory;
}();

exports.default = StandardImageRepositoryFactory;
},{"lib/ren2/image_repository.class":26}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Model = function () {
    function StandardRen2Model(indices, layer, locationX, locationY, textureImage, triangleCollection, triangleFactory) {
        _classCallCheck(this, StandardRen2Model);

        this.indices = indices;
        this.layer = layer;
        this.locationX = locationX;
        this.locationY = locationY;
        this.textureImage = textureImage;
        this.triangleCollection = triangleCollection;
        this.triangleFactory = triangleFactory;
    }

    _createClass(StandardRen2Model, [{
        key: "addTriangle",
        value: function addTriangle(vertex1, vertex2, vertex3) {
            var indexCount = this.indices.count(),
                triangle = this.triangleFactory.construct(vertex1, vertex2, vertex3);
            this.indices.add(indexCount);
            this.indices.add(indexCount + 1);
            this.indices.add(indexCount + 2);
            this.triangleCollection.add(triangle);
            return this;
        }
    }, {
        key: "getIndices",
        value: function getIndices() {
            return this.indices;
        }
    }, {
        key: "getLayer",
        value: function getLayer() {
            return this.layer;
        }
    }, {
        key: "getLocationX",
        value: function getLocationX() {
            return this.locationX;
        }
    }, {
        key: "getLocationY",
        value: function getLocationY() {
            return this.locationY;
        }
    }, {
        key: "getPositions",
        value: function getPositions() {
            var positions = new Array();
            this.triangleCollection.eachTriangle(function (triangle) {
                var vertex1 = triangle.getVertex1(),
                    vertex2 = triangle.getVertex2(),
                    vertex3 = triangle.getVertex3();
                positions.push(vertex1.getPositionX(), vertex1.getPositionY(), vertex2.getPositionX(), vertex2.getPositionY(), vertex3.getPositionX(), vertex3.getPositionY());
            });
            return Float32Array.from(positions);
        }
    }, {
        key: "getTextureImage",
        value: function getTextureImage() {
            return this.textureImage;
        }
    }, {
        key: "getTriangle",
        value: function getTriangle(index) {
            return this.triangleCollection.get(index);
        }
    }, {
        key: "getTextureCoordinates",
        value: function getTextureCoordinates() {
            var textureCoordinates = new Array();
            this.triangleCollection.eachTriangle(function (triangle) {
                var vertex1 = triangle.getVertex1(),
                    vertex2 = triangle.getVertex2(),
                    vertex3 = triangle.getVertex3();
                textureCoordinates.push(vertex1.getTextureCoordinateS(), vertex1.getTextureCoordinateT(), vertex2.getTextureCoordinateS(), vertex2.getTextureCoordinateT(), vertex3.getTextureCoordinateS(), vertex3.getTextureCoordinateT());
            });
            return Float32Array.from(textureCoordinates);
        }
    }]);

    return StandardRen2Model;
}();

exports.default = StandardRen2Model;
},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ModelCollection = function () {
    function StandardRen2ModelCollection() {
        _classCallCheck(this, StandardRen2ModelCollection);

        this.models = new Array();
    }

    _createClass(StandardRen2ModelCollection, [{
        key: "add",
        value: function add(model) {
            this.models.push(model);
        }
    }, {
        key: "eachModel",
        value: function eachModel(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var model = _step.value;

                    action(model);
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
    }]);

    return StandardRen2ModelCollection;
}();

exports.default = StandardRen2ModelCollection;
},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require("lib/ren2/model/collection.class");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ModelColletionFactory = function () {
    function StandardRen2ModelColletionFactory() {
        _classCallCheck(this, StandardRen2ModelColletionFactory);
    }

    _createClass(StandardRen2ModelColletionFactory, [{
        key: "construct",
        value: function construct() {
            return new _collection2.default();
        }
    }]);

    return StandardRen2ModelColletionFactory;
}();

exports.default = StandardRen2ModelColletionFactory;
},{"lib/ren2/model/collection.class":29}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require("lib/ren2/model.class");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ModelFactory = function () {
    function StandardRen2ModelFactory() {
        _classCallCheck(this, StandardRen2ModelFactory);
    }

    _createClass(StandardRen2ModelFactory, [{
        key: "construct",
        value: function construct(indices, layer, locationX, locationY, textureImage, triangleCollection, triangleFactory) {
            return new _model2.default(indices, layer, locationX, locationY, textureImage, triangleCollection, triangleFactory);
        }
    }]);

    return StandardRen2ModelFactory;
}();

exports.default = StandardRen2ModelFactory;
},{"lib/ren2/model.class":28}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO Consider renaming this? Ren2ModelRepository? Similar to how UserRepository saves users to the database.
var StandardRen2ModelRepository = function () {
    function StandardRen2ModelRepository(bufferFactory, modelBufferMap, webglRenderingContext) {
        _classCallCheck(this, StandardRen2ModelRepository);

        this.bufferFactory = bufferFactory;
        this.modelBufferMap = modelBufferMap;
        this.webglRenderingContext = webglRenderingContext;
        this.highestLayer = 1;
    }

    _createClass(StandardRen2ModelRepository, [{
        key: "containsBuffer",
        value: function containsBuffer(model) {
            return this.modelBufferMap.contains(model);
        }
    }, {
        key: "getBuffer",
        value: function getBuffer(model) {
            var buffer = void 0;
            if (this.modelBufferMap.contains(model)) {
                buffer = this.modelBufferMap.get(model);
            } else {
                throw "No buffer for model";
            }
            return buffer;
        }
    }, {
        key: "saveToBuffer",
        value: function saveToBuffer(model) {
            var _this = this;

            var buffer = void 0;
            // TODO This should be divided up into a create and save method. The create would initialize a buffer with all of
            //      the necessary data while this would simply save the data to an existing buffer.
            if (this.modelBufferMap.contains(model)) {
                buffer = this.modelBufferMap.get(model);
            } else {
                // TODO Consider also having this in a create method for a performance boost. Then, consider if this should save
                //      any model not created from this instance. If not, this would throw an error instead of creating a new
                //      buffer.
                buffer = this.bufferFactory.construct(this.webglRenderingContext.createBuffer(), 0, 1, Float32Array.from([0, 0]), this.webglRenderingContext.createBuffer(),
                // TODO Do not create redundant textures. A texture repository would help with this
                this.webglRenderingContext.createTexture(), this.webglRenderingContext.createBuffer(), this.webglRenderingContext);
                this.modelBufferMap.set(model, buffer);
            }
            // TODO Find a way to efficiently determine if rebuffering is necessary. Best I can think of is an event system.
            //      Maybe this will not be a performance issue?
            buffer.setIndices(model.getIndices().asArray());
            // Keep track of highest layer
            var layer = model.getLayer();
            if (layer > this.highestLayer) {
                this.highestLayer = layer;
                this.modelBufferMap.each(function (model, buffer) {
                    buffer.setLayer(-1.9 * model.getLayer() / _this.highestLayer + 0.95);
                });
            }
            buffer.setLayer(
            // WebGL has negative values closer than positive values
            // TODO Highest-layer algorithm prone to pushing Z values to the extremes if there is an exetreme difference
            //      between layer values. Is this a problem?
            -1.9 * layer / this.highestLayer + 0.95);
            // buffer.setLayer(
            //   -layer
            // );
            buffer.setLocation(model.getLocationX(), model.getLocationY());
            buffer.setPositions(model.getPositions());
            // TODO To avoid redundant textures, this API will need to change
            buffer.setTextureImage(model.getTextureImage());
            buffer.setTextureCoordinates(model.getTextureCoordinates());
            return buffer;
        }
    }]);

    return StandardRen2ModelRepository;
}();

exports.default = StandardRen2ModelRepository;
},{}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _repository = require("lib/ren2/model/repository.class");

var _repository2 = _interopRequireDefault(_repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2CanvasModelRepositoryFactory = function () {
    function StandardRen2CanvasModelRepositoryFactory() {
        _classCallCheck(this, StandardRen2CanvasModelRepositoryFactory);
    }

    _createClass(StandardRen2CanvasModelRepositoryFactory, [{
        key: "construct",
        value: function construct(bufferFactory, modelBufferMap, webglRenderingContext) {
            return new _repository2.default(bufferFactory, modelBufferMap, webglRenderingContext);
        }
    }]);

    return StandardRen2CanvasModelRepositoryFactory;
}();

exports.default = StandardRen2CanvasModelRepositoryFactory;
},{"lib/ren2/model/repository.class":32}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ModelBufferMap = function () {
    function StandardRen2ModelBufferMap() {
        _classCallCheck(this, StandardRen2ModelBufferMap);

        this.modelBufferMap = new Map();
    }

    _createClass(StandardRen2ModelBufferMap, [{
        key: "contains",
        value: function contains(model) {
            return this.modelBufferMap.has(model);
        }
    }, {
        key: "each",
        value: function each(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.modelBufferMap.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        model = _step$value[0],
                        buffer = _step$value[1];

                    action(model, buffer);
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
        value: function get(model) {
            return this.modelBufferMap.get(model);
        }
    }, {
        key: "set",
        value: function set(model, buffer) {
            this.modelBufferMap.set(model, buffer);
        }
    }]);

    return StandardRen2ModelBufferMap;
}();

exports.default = StandardRen2ModelBufferMap;
},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model_buffer_map = require("lib/ren2/model_buffer_map.class");

var _model_buffer_map2 = _interopRequireDefault(_model_buffer_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2ModelBufferMapFactory = function () {
    function StandardRen2ModelBufferMapFactory() {
        _classCallCheck(this, StandardRen2ModelBufferMapFactory);
    }

    _createClass(StandardRen2ModelBufferMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _model_buffer_map2.default();
        }
    }]);

    return StandardRen2ModelBufferMapFactory;
}();

exports.default = StandardRen2ModelBufferMapFactory;
},{"lib/ren2/model_buffer_map.class":34}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Renderer = function () {
    function StandardRen2Renderer(webglProgram, webglRenderingContext) {
        _classCallCheck(this, StandardRen2Renderer);

        this.webglProgram = webglProgram;
        this.webglRenderingContext = webglRenderingContext;
        // Enable depth testing
        this.webglRenderingContext.enable(this.webglRenderingContext.DEPTH_TEST);
        // Enable alpha
        this.webglRenderingContext.blendFunc(this.webglRenderingContext.SRC_ALPHA, this.webglRenderingContext.ONE_MINUS_SRC_ALPHA);
        this.webglRenderingContext.enable(this.webglRenderingContext.BLEND);
        // Clear the color as well as the depth buffer.
        this.webglRenderingContext.clear(this.webglRenderingContext.COLOR_BUFFER_BIT | this.webglRenderingContext.DEPTH_BUFFER_BIT);
        // Get program locations
        this.webglRenderingContext.useProgram(this.webglProgram);
        this.layerUniformLocation = this.webglRenderingContext.getUniformLocation(this.webglProgram, "uLayer");
        this.locationUniformLocation = this.webglRenderingContext.getUniformLocation(this.webglProgram, "uLocation");
        this.positionAttributeLocation = this.webglRenderingContext.getAttribLocation(this.webglProgram, "aPosition");
        this.webglRenderingContext.enableVertexAttribArray(this.positionAttributeLocation);
        this.textureCoordinateAttributeLocation = this.webglRenderingContext.getAttribLocation(this.webglProgram, "aTextureCoordinate");
        this.webglRenderingContext.enableVertexAttribArray(this.textureCoordinateAttributeLocation);
        this.textureUniformLocation = this.webglRenderingContext.getUniformLocation(this.webglProgram, "uTexture");
        this.webglRenderingContext.useProgram(null);
    }

    _createClass(StandardRen2Renderer, [{
        key: "draw",
        value: function draw(buffer) {
            this.webglRenderingContext.useProgram(this.webglProgram);
            // Model z-placement
            this.webglRenderingContext.uniform1f(this.layerUniformLocation, buffer.getLayer());
            // Model placement on the viewport
            this.webglRenderingContext.uniform2fv(this.locationUniformLocation,
            // TODO Should be of length two
            buffer.getLocation());
            // Model vertex positions
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, buffer.getPositionBuffer());
            this.webglRenderingContext.vertexAttribPointer(this.positionAttributeLocation, 2, this.webglRenderingContext.FLOAT, false, 0, 0);
            // Model Texture Coordinates
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, buffer.getTextureCoordinateBuffer());
            this.webglRenderingContext.vertexAttribPointer(this.textureCoordinateAttributeLocation, 2, this.webglRenderingContext.FLOAT, false, 0, 0);
            // Model Texture
            this.webglRenderingContext.activeTexture(this.webglRenderingContext.TEXTURE0);
            this.webglRenderingContext.bindTexture(this.webglRenderingContext.TEXTURE_2D, buffer.getTexture());
            this.webglRenderingContext.uniform1i(this.textureUniformLocation, 0);
            // Draw model by indices
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, buffer.getIndexBuffer());
            this.webglRenderingContext.drawElements(this.webglRenderingContext.TRIANGLES, buffer.getIndexCount(), this.webglRenderingContext.UNSIGNED_SHORT, 0);
            this.webglRenderingContext.useProgram(null);
        }
    }]);

    return StandardRen2Renderer;
}();

exports.default = StandardRen2Renderer;
},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require("lib/ren2/renderer.class");

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2RendererFactory = function () {
    function StandardRen2RendererFactory() {
        _classCallCheck(this, StandardRen2RendererFactory);
    }

    _createClass(StandardRen2RendererFactory, [{
        key: "construct",
        value: function construct(webglProgram, webglRenderingContext) {
            return new _renderer2.default(webglProgram, webglRenderingContext);
        }
    }]);

    return StandardRen2RendererFactory;
}();

exports.default = StandardRen2RendererFactory;
},{"lib/ren2/renderer.class":36}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Service = function () {
    function StandardRen2Service(canvasContexts, contextFactory, imageRepository, modelCollectionFactory, modelFactory, stageFactory, triangleCollectionFactory, triangleFactory, uint16CollectionFactory, vertexFactory) {
        _classCallCheck(this, StandardRen2Service);

        this.canvasContexts = canvasContexts;
        this.contextFactory = contextFactory;
        this.imageRepository = imageRepository;
        this.modelCollectionFactory = modelCollectionFactory;
        this.modelFactory = modelFactory;
        this.stageFactory = stageFactory;
        this.triangleCollectionFactory = triangleCollectionFactory;
        this.triangleFactory = triangleFactory;
        this.uint16CollectionFactory = uint16CollectionFactory;
        this.vertexFactory = vertexFactory;
    }

    _createClass(StandardRen2Service, [{
        key: "clear",
        value: function clear(canvas) {
            var context = void 0;
            if (this.canvasContexts.contains(canvas)) {
                context = this.canvasContexts.get(canvas);
            } else {
                context = this.contextFactory.construct(canvas);
                this.canvasContexts.set(canvas, context);
            }
            context.clearCanvas();
        }
    }, {
        key: "createModel",
        value: function createModel(layer, locationX, locationY, textureImage) {
            return this.modelFactory.construct(this.uint16CollectionFactory.construct(), layer, locationX, locationY, textureImage, this.triangleCollectionFactory.construct(), this.triangleFactory);
        }
    }, {
        key: "createStage",
        value: function createStage() {
            return this.stageFactory.construct(this.modelCollectionFactory.construct());
        }
    }, {
        key: "createVertex",
        value: function createVertex(xPosition, yPosition, uTextureCoordinate, vTextureCoordinate) {
            return this.vertexFactory.construct(xPosition, yPosition, uTextureCoordinate, vTextureCoordinate);
        }
    }, {
        key: "loadImage",
        value: function loadImage(path) {
            var _this = this;

            var image = void 0;
            if (this.imageRepository.containsPath(path)) {
                image = Promise.resolve(this.imageRepository.getImage(path));
            } else {
                image = new Promise(function (resolve, reject) {
                    var image = new Image();
                    image.onload = function () {
                        resolve(image);
                    };
                    // TODO Error handling on load image
                    image.src = path;
                    _this.imageRepository.storeImage(path, image);
                });
            }
            return image;
        }
    }, {
        key: "loadImages",
        value: function loadImages(paths) {
            var _this2 = this;

            var imageElements = new Array();
            paths.forEach(function (path) {
                imageElements.push(_this2.loadImage(path));
            });
            return Promise.all(imageElements);
        }
    }, {
        key: "render",
        value: function render(canvas, stage) {
            var context = void 0;
            if (this.canvasContexts.contains(canvas)) {
                context = this.canvasContexts.get(canvas);
            } else {
                context = this.contextFactory.construct(canvas);
                this.canvasContexts.set(canvas, context);
            }
            context.draw(stage);
        }
    }]);

    return StandardRen2Service;
}();

exports.default = StandardRen2Service;
},{}],39:[function(require,module,exports){
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
},{"lib/ren2/service.class":38}],40:[function(require,module,exports){
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
},{}],41:[function(require,module,exports){
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
},{"lib/ren2/stage.class":40}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Triangle = function () {
    function StandardRen2Triangle(vertex1, vertex2, vertex3) {
        _classCallCheck(this, StandardRen2Triangle);

        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    _createClass(StandardRen2Triangle, [{
        key: "getVertex1",
        value: function getVertex1() {
            return this.vertex1;
        }
    }, {
        key: "getVertex2",
        value: function getVertex2() {
            return this.vertex2;
        }
    }, {
        key: "getVertex3",
        value: function getVertex3() {
            return this.vertex3;
        }
    }]);

    return StandardRen2Triangle;
}();

exports.default = StandardRen2Triangle;
},{}],43:[function(require,module,exports){
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
},{}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require("lib/ren2/triangle/collection.class");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2TriangleCollectionFactory = function () {
    function StandardRen2TriangleCollectionFactory() {
        _classCallCheck(this, StandardRen2TriangleCollectionFactory);
    }

    _createClass(StandardRen2TriangleCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _collection2.default();
        }
    }]);

    return StandardRen2TriangleCollectionFactory;
}();

exports.default = StandardRen2TriangleCollectionFactory;
},{"lib/ren2/triangle/collection.class":43}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _triangle = require("lib/ren2/triangle.class");

var _triangle2 = _interopRequireDefault(_triangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2TriangleFactory = function () {
    function StandardRen2TriangleFactory() {
        _classCallCheck(this, StandardRen2TriangleFactory);
    }

    _createClass(StandardRen2TriangleFactory, [{
        key: "construct",
        value: function construct(vertex1, vertex2, vertex3) {
            return new _triangle2.default(vertex1, vertex2, vertex3);
        }
    }]);

    return StandardRen2TriangleFactory;
}();

exports.default = StandardRen2TriangleFactory;
},{"lib/ren2/triangle.class":42}],46:[function(require,module,exports){
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
},{}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uint16_collection = require("lib/ren2/uint16_collection.class");

var _uint16_collection2 = _interopRequireDefault(_uint16_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Uint16CollectionFactory = function () {
    function StandardRen2Uint16CollectionFactory() {
        _classCallCheck(this, StandardRen2Uint16CollectionFactory);
    }

    _createClass(StandardRen2Uint16CollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _uint16_collection2.default();
        }
    }]);

    return StandardRen2Uint16CollectionFactory;
}();

exports.default = StandardRen2Uint16CollectionFactory;
},{"lib/ren2/uint16_collection.class":46}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Vertex = function () {
    function StandardRen2Vertex(positionX, positionY, textureCoordinateS, textureCoordinateT) {
        _classCallCheck(this, StandardRen2Vertex);

        this.positionX = positionX;
        this.positionY = positionY;
        this.textureCoordinateS = textureCoordinateS;
        this.textureCoordinateT = textureCoordinateT;
    }

    _createClass(StandardRen2Vertex, [{
        key: "getPositionX",
        value: function getPositionX() {
            return this.positionX;
        }
    }, {
        key: "getPositionY",
        value: function getPositionY() {
            return this.positionY;
        }
    }, {
        key: "getTextureCoordinateS",
        value: function getTextureCoordinateS() {
            return this.textureCoordinateS;
        }
    }, {
        key: "getTextureCoordinateT",
        value: function getTextureCoordinateT() {
            return this.textureCoordinateT;
        }
    }, {
        key: "setTextureCoordinate",
        value: function setTextureCoordinate(textureCoordinateS, textureCoordinateT) {
            this.textureCoordinateS = textureCoordinateS;
            this.textureCoordinateT = textureCoordinateT;
        }
    }]);

    return StandardRen2Vertex;
}();

exports.default = StandardRen2Vertex;
},{}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vertex = require("lib/ren2/vertex.class");

var _vertex2 = _interopRequireDefault(_vertex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2VertexFactory = function () {
    function StandardRen2VertexFactory() {
        _classCallCheck(this, StandardRen2VertexFactory);
    }

    _createClass(StandardRen2VertexFactory, [{
        key: "construct",
        value: function construct(xPosition, yPosition, uTextureCoordinate, vTextureCoordinate) {
            return new _vertex2.default(xPosition, yPosition, uTextureCoordinate, vTextureCoordinate);
        }
    }]);

    return StandardRen2VertexFactory;
}();

exports.default = StandardRen2VertexFactory;
},{"lib/ren2/vertex.class":48}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2WebGLProgramFactory = function () {
    function StandardRen2WebGLProgramFactory(webglShaderFactory) {
        _classCallCheck(this, StandardRen2WebGLProgramFactory);

        this.webglShaderFactory = webglShaderFactory;
    }

    _createClass(StandardRen2WebGLProgramFactory, [{
        key: "construct",
        value: function construct(fragmentShaderSource, vertexShaderSource, webglRenderingContext) {
            var webglProgram = webglRenderingContext.createProgram();
            var fragmentShader = this.webglShaderFactory.construct(fragmentShaderSource, webglRenderingContext.FRAGMENT_SHADER, webglRenderingContext),
                vertexShader = this.webglShaderFactory.construct(vertexShaderSource, webglRenderingContext.VERTEX_SHADER, webglRenderingContext);
            webglRenderingContext.attachShader(webglProgram, vertexShader);
            webglRenderingContext.attachShader(webglProgram, fragmentShader);
            webglRenderingContext.linkProgram(webglProgram);
            if (!webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.LINK_STATUS)) {
                throw "Unable to initialize the WebGL program: " + webglRenderingContext.getProgramInfoLog(webglProgram);
            }
            return webglProgram;
        }
    }]);

    return StandardRen2WebGLProgramFactory;
}();

exports.default = StandardRen2WebGLProgramFactory;
},{}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2WebGLShaderFactory = function () {
    function StandardRen2WebGLShaderFactory() {
        _classCallCheck(this, StandardRen2WebGLShaderFactory);
    }

    _createClass(StandardRen2WebGLShaderFactory, [{
        key: "construct",
        value: function construct(shaderSource, shaderType, webglRenderingContext) {
            var shader = webglRenderingContext.createShader(shaderType);
            webglRenderingContext.shaderSource(shader, shaderSource);
            webglRenderingContext.compileShader(shader);
            if (!webglRenderingContext.getShaderParameter(shader, webglRenderingContext.COMPILE_STATUS)) {
                var log = webglRenderingContext.getShaderInfoLog(shader),
                    shaderName = shaderType == webglRenderingContext.FRAGMENT_SHADER ? "fragment shader" : "vertex shader";
                webglRenderingContext.deleteShader(shader);
                throw "An error occurred compiling the " + shaderName + " shader: " + log;
            }
            return shader;
        }
    }]);

    return StandardRen2WebGLShaderFactory;
}();

exports.default = StandardRen2WebGLShaderFactory;
},{}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fragmentShaderSource = "\n  varying highp vec2 vTextureCoordinate;\n\n  uniform sampler2D uTexture;\n\n  void main(void)\n  {\n    gl_FragColor = texture2D(uTexture, vTextureCoordinate);\n  }\n";
exports.default = fragmentShaderSource;
},{}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var vertexShaderSource = "\n  attribute vec2 aPosition;\n  attribute vec2 aTextureCoordinate;\n\n  // uint is not supported in WebGL (GLSL 100) - it is in WebGL 2 (GLSL 300)\n  uniform float uLayer;\n  uniform  vec2 uLocation;\n\n  varying highp vec2 vTextureCoordinate;\n\n  void main(void)\n  {\n    gl_Position = vec4(aPosition + uLocation, uLayer, 1.0);\n    vTextureCoordinate = aTextureCoordinate;\n  }\n";
exports.default = vertexShaderSource;
},{}]},{},[19]);
