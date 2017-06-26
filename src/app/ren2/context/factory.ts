import Ren2ContextFactory     from "lib/ren2/context/factory.class";

import bufferFactory          from "app/ren2/buffer/factory";
import modelBufferMapFactory  from "app/ren2/model_buffer_map/factory";
import modelRepositoryFactory from "app/ren2/model/repository/factory";
import rendererFactory        from "app/ren2/renderer/factory";
import webglProgramFactory    from "app/ren2/webgl/program/factory";

const ren2ContextFactory = new Ren2ContextFactory(
  bufferFactory,
  modelBufferMapFactory,
  modelRepositoryFactory,
  rendererFactory,
  webglProgramFactory
);

export default ren2ContextFactory;
