class MovementController {
    constructor(shapeObject, movementSpeed) {
        this.shapeObject = shapeObject;
        this.movementSpeed = movementSpeed;

        // Object to track which arrow keys are currently pressed
        this.keyState = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false
        };

        // Set up key press and release event listeners
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    onKeyDown(event) {
        // Update key state when a key is pressed
        if (event.key in this.keyState) {
            this.keyState[event.key] = true;
            this.updateShapePosition();
        }
    }

    onKeyUp(event) {
        // Update key state when a key is released
        if (event.key in this.keyState) {
            this.keyState[event.key] = false;
            this.updateShapePosition();
        }
    }

    updateShapePosition() {
        // Calculate movement based on pressed arrow keys
        let dx = 0;
        let dz = 0;

        if (this.keyState.ArrowUp) dz -= this.movementSpeed;
        if (this.keyState.ArrowDown) dz += this.movementSpeed;
        if (this.keyState.ArrowLeft) dx -= this.movementSpeed;
        if (this.keyState.ArrowRight) dx += this.movementSpeed;

        // Update shape position
        this.shapeObject.position.x += dx;
        this.shapeObject.position.z += dz;
    }
}