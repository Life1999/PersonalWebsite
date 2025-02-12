import React, { useState, useEffect } from 'react';

function MovementController({ meshRef }) {
  const [keysPressed, setKeysPressed] = useState({
    ArrowLeft: false,
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false,
  });
  const speed = 0.1;

  useEffect(() => {
    const onKeyDown = (event) => {
      console.log("key down");
      setKeysPressed((prevKeysPressed) => ({
        ...prevKeysPressed,
        [event.key]: true,
      }));
    };

    const onKeyUp = (event) => {
      console.log("key up");
      setKeysPressed((prevKeysPressed) => ({
        ...prevKeysPressed,
        [event.key]: false,
      }));
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    if (!meshRef || !meshRef.current) return;

    const updatePosition = () => {
      let deltaX = 0;
      let deltaY = 0;

      if (keysPressed.ArrowLeft) deltaX -= speed;
      if (keysPressed.ArrowRight) deltaX += speed;
      if (keysPressed.ArrowUp) deltaY += speed;
      if (keysPressed.ArrowDown) deltaY -= speed;

      console.log(keysPressed);
      meshRef.current.position.x += deltaX;
      // meshRef.current.position.y += deltaY;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (
        !keysPressed.ArrowLeft &&
        !keysPressed.ArrowRight &&
        !keysPressed.ArrowUp &&
        !keysPressed.ArrowDown
      ) {
        // Stop movement if no keys are pressed
        return;
      }
      updatePosition();
    };

    animate();
  }, [keysPressed, meshRef]);

  return null; // This component doesn't render anything to the DOM
}

export default MovementController;
