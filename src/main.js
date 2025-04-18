import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 7.5);
scene.add(dirLight);

// sample product: a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x156289, metalness: 0.5, roughness: 0.5 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// GUI
const gui = new GUI();
const cubeFolder = gui.addFolder('Cube');
cubeFolder.add(cube.scale, 'x', 0.1, 3).name('Scale X');
cubeFolder.add(cube.scale, 'y', 0.1, 3).name('Scale Y');
cubeFolder.add(cube.scale, 'z', 0.1, 3).name('Scale Z');
cubeFolder.addColor({ color: cube.material.color.getHex() }, 'color').onChange(value => cube.material.color.set(value)).name('Color');
cubeFolder.open();

// handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// === UI 交互：帮助与主题切换 ===
window.addEventListener('DOMContentLoaded', () => {
  // 帮助模态框
  const helpBtn = document.getElementById('help-btn');
  const helpModal = document.getElementById('help-modal');
  const helpClose = document.getElementById('help-close');
  helpBtn && helpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    helpModal.classList.add('show');
  });
  helpClose && helpClose.addEventListener('click', () => {
    helpModal.classList.remove('show');
  });
  helpModal && helpModal.addEventListener('click', (e) => {
    if (e.target === helpModal) helpModal.classList.remove('show');
  });

  // 主题切换
  const themeBtn = document.getElementById('theme-btn');
  themeBtn && themeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('dark-theme');
  });
});
