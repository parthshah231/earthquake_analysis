import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

// let width = window.innerWidth / 1.25;
let width = window.innerWidth;
let height = window.innerHeight;

if (window.matchMedia("(max-width: 992px)").matches) {
  width = window.innerWidth
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 
  75, 
  width / height, 
  0.1 ,
  1000 );
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("canvas")
});

renderer.setSize(width , height);
renderer.setPixelRatio(window.devicePixelRatio);
// document.body.appendChild( renderer.domElement );

const texture = new THREE.TextureLoader().load('static/globe-night.jpg');

const sphereGeometry = new THREE.SphereGeometry( 30, 50, 50 );
const sphereMaterial = new THREE.MeshBasicMaterial({ 
  map: texture
});
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
console.log(sphere);

scene.add(sphere);

function getCoordinates() {
  fetch('/coordinates')
  .then(response => response.json())
  .then(data => {
      for (let coordStr in data) {
          let [place, mag] = data[coordStr];
          let [x, y, z] = coordStr.split(' ').map(Number);
          var magnitudeNormalized = mag / 10;

          var color = new THREE.Color();
          color.setRGB(1, 1-magnitudeNormalized, 1-magnitudeNormalized)

          var barGeometry = new THREE.CylinderGeometry(0.01, 0.01, mag, 10);
          var barMaterial = new THREE.MeshBasicMaterial({color: color});

          var bar = new THREE.Mesh(barGeometry, barMaterial);

          bar.position.set(x, y, z);
          var normal = bar.position.clone().normalize();
          bar.lookAt(normal);
          bar.rotateX(Math.PI / 2);

          scene.add(bar);
      }
  });
}




// camera.position.y = 15;
camera.position.z = 60;

const controls = new OrbitControls( camera, renderer.domElement );

const animate = function () {
  requestAnimationFrame( animate );
  // sphere.rotation.y += 0.003;
  renderer.render( scene, camera );
};

animate();

getCoordinates();
