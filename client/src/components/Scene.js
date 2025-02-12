// src/components/Scene.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Cube from './Cube'

function Scene({ sphereMeshRef }) {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    document.body.appendChild(renderer.domElement);

    // Add the sphere to the scene
    if (sphereMeshRef.current) {
      scene.add(sphereMeshRef.current);
    }

    // Animate the scene
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, [sphereMeshRef]);

  return null;
}

export default Scene;
