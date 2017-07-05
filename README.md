# ren2

ren2 is a 2D rendering engine written from the Web using WebGL. It is designed for users to focus on modeling objects to
for rendering and takes care of everything else.

`npm install ren2`

Or if you are a yarn fan (like me):

`yarn install ren2`

## Usage

The API is simple enough to use (I hope). Everything required to get ren2 going is found on the main service object:

`const ren2 = require("ren2");`

Or if you are importing through a script tag on a web page the `www.js` file adds a `ren2` global variable containing
the service object. Once you have that, then you can begin modeling:

```typescript
clear(
  canvas  : HTMLCanvasElement
): void;
```

Wipes an `HTMLCanvasElement` to it's clear color (currently transparent).

```typescript
createModel(
  layer         : number,
  locationX     : number,
  locationY     : number,
  textureImage  : HTMLImageElement
): Ren2Model;
```

Creates a `Ren2Model` object. `layer` must be greater than or equal to zero. `locationX` and `locationY` must be between
`-1.0` and `1.0`. `textureImage` must be an `HTMLImageElement`. If the image is not loaded by the time this model is
rendered, the model will not be rendered visibly - this is not a catchable error.

```typescript
createVertex(
  xPosition           : number,
  yPosition           : number,
  sTextureCoordinate  : number,
  tTextureCoordinate  : number
): Ren2Vertex;
```

Creates a `Ren2Vertex` object. `xPosition` and `yPosition` must be between `-1.0` and `1.0`. `sTextureCoordinate` and
`tTextureCoordinate` must be between `0.0` and `1.0`.

```typescript
loadImage(
  path  : string
): Promise<HTMLImageElement>;
```

Loads an image via an `HTMLImageElement`. The returned `Promise` will resolve with the `HTMLImageElement` when the image
is successfully loaded. Currently, no errors are reported.

```typescript
loadImages(
  path  : Array<string>
): Promise<Array<HTMLImageElement>>;
```

Loads a collection of images via `HTMLImageElement`s. The returned `Promise` will resolve with an array of
`HTMLImageElement`s when all images are successfully loaded. Currently, no errors are reported.

```typescript
render(
  canvas  : HTMLCanvasElement,
  stage   : Ren2Stage
): void;
```

Renders a the data represented by a `Ren2Stage` object to an `HTMLCanvasElement`.

## Examples and Resources

[Here](https://github.com/elyctech/ren2/blob/master/demo/index.html) is a simple example of ren2 in action.

Suggestions for more examples and resources are more than welcome. Each will be vetted and linked once cleared.

## Limitations and Caveats

ren2 is not by any means perfect. In fact, I would consider it far from

### Textures

Textures are by far the most limited feature in ren2. In WebGL, there are a number of features allowing users to define
wrapping and filtering policies, utilize cube maps, and control a number of other details. ren2 uses the bare minimum to
make textures work:

```typescript
this.webglRenderingContext.texParameteri(
  this.webglRenderingContext.TEXTURE_2D,
  this.webglRenderingContext.TEXTURE_MIN_FILTER,
  this.webglRenderingContext.LINEAR
);

this.webglRenderingContext.texParameteri(
  this.webglRenderingContext.TEXTURE_2D,
  this.webglRenderingContext.TEXTURE_WRAP_S,
  this.webglRenderingContext.REPEAT
);

this.webglRenderingContext.texParameteri(
  this.webglRenderingContext.TEXTURE_2D,
  this.webglRenderingContext.TEXTURE_WRAP_T,
  this.webglRenderingContext.REPEAT
);
```

In the future, a simple API for advanced texture management will be explored to support the features ren2 does not use
or expose.

Along with limited features, textures are not managed in such a way that allow for reuse. Each model using a given image
has its own WebGL texture even if one already exists for that image. In the future, having textures reused based on the
image and set properties would be more efficient in terms GPU-memory, but it would be at the cost of code complexity.
For example, if a texture was reused simply by image, changing the wrapping policy, for example, would change it for all
buffers using that texture. That may or may not be the desired effect.

### Layers

Layers are defined as greater than or equal to zero due to lack of testing. Negative layers may work in the curren form,
but there is no explicit support for them, nor are they guaranteed to work moving forward. There is an issue asking the
question if negative layers should be supported.

### Context-level Configuration

Similar to texture properties, there is no access to the WebGL context to change its properties. Currently, this is the
configuration given to each context built:

```typescript
// Enable depth testing
this.webglRenderingContext.enable(
  this.webglRenderingContext.DEPTH_TEST
);

// Enable alpha
this.webglRenderingContext.blendFunc(
  this.webglRenderingContext.SRC_ALPHA,
  this.webglRenderingContext.ONE_MINUS_SRC_ALPHA
);

this.webglRenderingContext.enable(
  this.webglRenderingContext.BLEND
);
```

Most will find this configuration adequate. Notably missing is a "clear color" - especially given the `clear` functionality provided on the service object. Currently, the canvas is cleared to transparent, so a background color may be given to the canvas to emulate a "clear color".

## Contributing

Currently, there is no solid process for contributing. As one could imagine, it is hard to contribute when there is no roadmap or even a list of desired features. For now, contributions can be made in the form of finding bugs, presenting ideas for enhancements, and asking questions that may trigger interesting thought experiments. For convenience, there are labels to log issues for each.

When bugs and enhancements are ready for coding, pull requests are welcome but subject to a strict code review process. Currently, there are no style guides at present in this repository - the conventions of the current code-base functions as the guide and must be used. If there are questions or concerns about the current conventions, the `bug`, `enhancement`, or `question` labels can be used with an additional label of `coding-conventions` to denote the concern, suggestion, or question presented in the issue is related to code conventions and not functionality.

Everything is open to discussion, but consistency within the project is the top priority. Any changes to conventions established in the code must be applied to the current code-base as well as upheld in the future. Therefore, make sure there is a strong basis for such changes before recommending them.

Finally, when logging issues, be mindful of our newest community members. If there are issues or discussions well-suited for new developers, please add the `beginner-friendly` tag. While beginners are welcome to contribute to any and all issues logged, being tagged as such will hopefully make the issues more inviting.

## Support

While there is no support guarantee, issues asking for support are welcome and must be tagged with `support-inquiry`. Anyone able to provide support is encouraged to do so.
