import './MovementController.js';

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
    renderer.render(scene, camera);
}

// TODO encapsulate: 
// Create a purple sphere
const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x800080 }); // Purple color
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.position.set(0, 1, 0); // Position the sphere on top of the plane
scene.add(sphereMesh);

const movementController = new MovementController(sphereMesh, 0.1);

console.log('hello');
const cube = addCube();
const plane = addPlane();
animate();
