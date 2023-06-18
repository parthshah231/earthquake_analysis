import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  antialias: true,  //reduce the creases from the edges
  canvas: document.querySelector("canvas")
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// add a sphere
const texture = new THREE.TextureLoader().load('globe-night.jpg');
const sphereGeometry = new THREE.SphereGeometry(30, 50, 50);
const sphereMaterial = new THREE.MeshBasicMaterial({
  map:texture
});
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
// console.log(sphereMesh);
scene.add(sphereMesh);

camera.position.z = 100;

const animate = function (){
  requestAnimationFrame(animate);
  sphereMesh.rotation.y -= 0.003;
  renderer.render(scene, camera)
}

animate();