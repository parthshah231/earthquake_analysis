import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

let width = window.innerWidth / 1.25;
let height = window.innerHeight;

if (window.matchMedia("(max-width: 992px)").matches) {
  width = window.innerWidth;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("canvas")
});

const texture = new THREE.TextureLoader().load('static/globe-night.jpg');

const sphereGeometry = new THREE.SphereGeometry(30, 50, 50);
const sphereMaterial = new THREE.MeshBasicMaterial({
  map: texture
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
const controls = new OrbitControls( camera, renderer.domElement );
  

function initGlobe() {
  
  
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  console.log(sphere);

  scene.add(sphere);

  if (window.matchMedia("(max-width: 992px)").matches) {
    camera.position.z = 80;
    controls.minDistance = 70;
    controls.maxDistance = 90;
  } else {
    camera.position.z = 60;
    controls.minDistance = 50;
    controls.maxDistance = 70;
  }

  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();
}

function updateGlobeCoordinates(data) {
  for (let i = scene.children.length - 1; i >= 0; i--) {
    const object = scene.children[i];
    if (object !== sphere) {
      scene.remove(object);
    }
  }

  for (let coordStr in data) {
    let [place, mag] = data[coordStr];
    let [x, y, z] = coordStr.split(' ').map(Number);
    var magnitudeNormalized = mag / 10;

    var color = new THREE.Color();
    color.setRGB(1, 1 - magnitudeNormalized, 1 - magnitudeNormalized);

    var barGeometry = new THREE.CylinderGeometry(0.01, 0.01, mag, 10);
    var barMaterial = new THREE.MeshBasicMaterial({ color: color });

    var bar = new THREE.Mesh(barGeometry, barMaterial);

    bar.position.set(x, y, z);
    var normal = bar.position.clone().normalize();
    bar.lookAt(normal);
    bar.rotateX(Math.PI / 2);

    scene.add(bar);
  }
  document.querySelector(".loadingio-spinner-double-ring-b8es6owmp3k").classList.remove("active")
}

function fetchCoordinates(year, month) {
  fetch("/coordinates?year=" + year + "&month=" + month)
    .then(response => response.json())
    .then(data => {
      updateGlobeCoordinates(data);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  initGlobe();

  var yearSelector = document.getElementById("year");
  var monthSelector = document.getElementById("month");
  var selectedYear;
  var selectedMonth;
  yearSelector.addEventListener("change", function () {
    document.querySelector(".loadingio-spinner-double-ring-b8es6owmp3k").classList.add("active")
    selectedYear = yearSelector.value;
    selectedMonth = monthSelector.value;
    fetchCoordinates(selectedYear, selectedMonth);
  });

  monthSelector.addEventListener("change", function () {
    document.querySelector(".loadingio-spinner-double-ring-b8es6owmp3k").classList.add("active")
    selectedYear = yearSelector.value;
    selectedMonth = monthSelector.value;
    fetchCoordinates(selectedYear, selectedMonth);
  });

  // Fetch initial coordinates for the default year
  var defaultYear = yearSelector.value;
  var defaultMonth = monthSelector.value;
  document.querySelector(".loadingio-spinner-double-ring-b8es6owmp3k").classList.add("active")
  fetchCoordinates(defaultYear, defaultMonth);
  document.querySelector(".loadingio-spinner-double-ring-b8es6owmp3k").classList.add("remove")
});
