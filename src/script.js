import './css/style.css';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Canvas
 */
const canvasElement = document.querySelector(".webgl");

let sizes = {
    width:window.innerWidth,
    height:window.innerHeight,
}
const {width,height} = sizes;

/**
 * Scene and camera
 */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

camera.position.set(1,1,2)
camera.lookAt(new THREE.Vector3())

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
    canvas:canvasElement
});

renderer.setSize( width, height );
renderer.render(scene,camera);

//Axes helper
scene.add(new THREE.AxesHelper(1));
// orbit controls
const controls = new OrbitControls( camera, canvasElement);
controls.enableDamping=true;

let animate = ()=>{
    
    
    controls.update();

    renderer.render(scene,camera);
    window.requestAnimationFrame(animate)
}

animate();
