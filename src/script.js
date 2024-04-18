// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function addCube()
{
    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return cube;
}

// TODO encapsulate: 
    // Create a purple sphere
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x800080 }); // Purple color
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.position.set(0, 1, 0); // Position the sphere on top of the plane
    scene.add(sphereMesh);

function addPlane()
{
    // Create a plane geometry
    const planeGeometry = new THREE.PlaneGeometry(10, 10); // width, height, widthSegments, heightSegments

    // Create a material for the plane
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide });

    // Create the plane mesh
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.rotation.x = -Math.PI / 2; // Rotate the plane to lay flat on the ground
    scene.add(planeMesh);
}

// Position the camera
camera.position.set(0, 10, 10); // Set camera position (x, y, z)
camera.lookAt(0, 0, 0); // Point the camera at the center of the scene

// Define a variable to track whether the left arrow key is pressed
const Direction = 
{
    LEFT: 'left',
    RIGHT: 'right',
    UP: 'up',
    DOWN: 'down',
    NONE: 'none'
};

let direction = Direction.NONE;

// Function to handle keydown event
function onKeyDown(event) {
    console.log('Key pressed:', event.key);

    switch (event.key) {
        case 'ArrowLeft':
            direction = Direction.LEFT;
            break;
        case 'ArrowRight':
            direction = Direction.RIGHT;
            break;
        case 'ArrowUp':
            direction = Direction.UP;
            break;
        case 'ArrowDown':
            direction = Direction.DOWN;
            break;
    }
}

// TODO: fix to allow 2 directions at once
// Function to handle keyup event
function onKeyUp(event) {
    direction = Direction.NONE;
}

// Add event listeners for keydown and keyup events
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

// Function to update sphere position
function updateSpherePosition() {
    switch (direction) {
        case Direction.LEFT:
            sphereMesh.position.x -= 0.1; // Move sphere left
            break;
        case Direction.RIGHT:
            sphereMesh.position.x += 0.1; // Move sphere right
            break;
        case Direction.UP:
            sphereMesh.position.z -= 0.1; // Move sphere forward
            break;
        case Direction.DOWN:
            sphereMesh.position.z += 0.1; // Move sphere backward
            break;
    }
}

// Set up a resize event listener to handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    updateSpherePosition();
    renderer.render(scene, camera);
}

// Add event listener for keydown event
window.addEventListener('keydown', onKeyDown);

console.log('hello');
const cube = addCube();
const plane = addPlane();
animate();
