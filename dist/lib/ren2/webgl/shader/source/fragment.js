"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fragmentShaderSource = "\n  varying highp vec2 vTextureCoordinate;\n\n  uniform sampler2D uTexture;\n\n  void main(void)\n  {\n    gl_FragColor = texture2D(uTexture, vTextureCoordinate);\n  }\n";
exports.default = fragmentShaderSource;