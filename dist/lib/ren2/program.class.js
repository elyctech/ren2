"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardRen2Program = function () {
    function StandardRen2Program(webglProgram, webglRenderingContext) {
        _classCallCheck(this, StandardRen2Program);

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
        this.locationUniformLocation = this.webglRenderingContext.getUniformLocation(this.webglProgram, "uLocation");
        this.positionAttributeLocation = this.webglRenderingContext.getAttribLocation(this.webglProgram, "aPosition");
        this.webglRenderingContext.enableVertexAttribArray(this.positionAttributeLocation);
        this.textureCoordinateAttributeLocation = this.webglRenderingContext.getAttribLocation(this.webglProgram, "aTextureCoordinate");
        this.webglRenderingContext.enableVertexAttribArray(this.textureCoordinateAttributeLocation);
        this.textureUniformLocation = this.webglRenderingContext.getUniformLocation(this.webglProgram, "uTexture");
    }
    // TODO Consider renaming to "drawElements" to go with Ren2Program rename. Or maybe just draw.


    _createClass(StandardRen2Program, [{
        key: "render",
        value: function render(buffer) {
            this.webglRenderingContext.useProgram(this.webglProgram);
            // Model placement on the viewport
            this.webglRenderingContext.uniform2fv(this.locationUniformLocation,
            // Should be of length two
            buffer.getLocation());
            // Model vertex positions
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, buffer.getPositionBuffer());
            this.webglRenderingContext.vertexAttribPointer(this.positionAttributeLocation, 3, this.webglRenderingContext.FLOAT, false, 0, 0);
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
        }
    }]);

    return StandardRen2Program;
}();

exports.default = StandardRen2Program;