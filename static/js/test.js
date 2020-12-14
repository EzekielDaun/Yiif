window.onload = function () {
  var { width, height, renderer } = initThree();
  var camera = initCamera(width, height);
  var scene = initScene();

  var light = initLight(scene);
  var cube = initCube(scene);

  var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();
  renderer.clear();
  renderer.render(scene, camera);
};

function initLight(scene) {
  var light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
  light.position.set(100, 100, 200);
  scene.add(light);
  return light;
}

function initCube(scene) {
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  return cube;
}

function initCamera(width, height) {
  var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 2;
  return camera;
}

function initScene() {
  return new THREE.Scene();
}

function initThree() {
  var div = document.getElementById("ball");
  var width = div.clientWidth;
  var height = div.clientHeight;
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  div.appendChild(renderer.domElement);
  return { width, height, renderer };
}
