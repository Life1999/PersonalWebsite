import React, { useState, useEffect } from 'react';

function MovementController({ meshRef }) {
  const speed = 0.1;
  const keysPressed = {
    ArrowLeft: false,
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false,
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key in keysPressed) {
        keysPressed[event.key] = true;
        updatePosition();
      }
    };

    const onKeyUp = (event) => {
      if (event.key in keysPressed) {
        keysPressed[event.key] = false;
      }
    };

    const updatePosition = () => {
      if (!meshRef || !meshRef.current) return;
      let deltaX = 0;
      let deltaZ = 0;

      if (keysPressed.ArrowLeft) deltaX -= speed;
      if (keysPressed.ArrowRight) deltaX += speed;
      if (keysPressed.ArrowUp) deltaZ -= speed;
      if (keysPressed.ArrowDown) deltaZ += speed;

      meshRef.current.position.x += deltaX;
      meshRef.current.position.z += deltaZ;
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [meshRef]);

  return null; // This component doesn't render anything to the DOM
}

export default MovementController;