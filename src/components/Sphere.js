// src/components/Sphere.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

class Sphere {
  constructor() {
    // Create a purple sphere
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x800080 }); // Purple color

    return new THREE.Mesh(sphereGeometry, sphereMaterial);
  }
}

export default Sphere;
