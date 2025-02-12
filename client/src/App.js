import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import MovementController from './components/MovementController';

function App() {
  const sceneRef = useRef(null);
  const meshRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement); // Append renderer to scene container

    // Create cube geometry and material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Create cube mesh and add it to the scene
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    meshRef.current = cube;

    // Animate function to render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to remove renderer on component unmount
    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={sceneRef}>
      <MovementController meshRef={meshRef} />
    </div>
  );
}

export default App;
