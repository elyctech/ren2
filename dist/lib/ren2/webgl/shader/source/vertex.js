"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var vertexShaderSource = "\n  attribute vec2 aPosition;\n  attribute vec2 aTextureCoordinate;\n\n  // uint is not supported in WebGL (GLSL 100) - it is in WebGL 2 (GLSL 300)\n  uniform float uLayer;\n  uniform  vec2 uLocation;\n\n  varying highp vec2 vTextureCoordinate;\n\n  void main(void)\n  {\n    gl_Position = vec4(aPosition + uLocation, uLayer, 1.0);\n    vTextureCoordinate = aTextureCoordinate;\n  }\n";
exports.default = vertexShaderSource;