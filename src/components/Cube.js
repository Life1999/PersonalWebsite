// Cube.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

class Cube {
    constructor() {
      // Create cube geometry and material
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  
      // Create and return cube mesh
      return new THREE.Mesh(geometry, material);
    }
  }

export default Cube;


