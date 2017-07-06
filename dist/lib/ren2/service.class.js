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