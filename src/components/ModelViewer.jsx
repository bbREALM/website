import React from 'react';
import '@google/model-viewer';

const ModelViewer = ({ src }) => (
  <model-viewer
    src={src}
    alt="A 3D model"
    auto-rotate
    camera-controls
    style={{ width: '100%', height: '500px' }}
    exposure="1"
    shadow-intensity="1"
  >
  </model-viewer>
);

export default ModelViewer;
