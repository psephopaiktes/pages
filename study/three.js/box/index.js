window.addEventListener('DOMContentLoaded', init);

function init() {

  // レンダリング初期設定
  const [width, height] = [960, 540];
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラ
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, 1000); // 初期座標を設定（X座標:0, Y座標:0, Z座標:0）

  // モデリング: 箱を作成
  const geometry = new THREE.BoxGeometry(500, 500, 500);
  const material = new THREE.MeshStandardMaterial({color: 0x0000FF});
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  // ライティング
  const light = new THREE.DirectionalLight(0xFFFFFF);
  light.intensity = 2; // 光の強さを倍に
  light.position.set(1, 1, 1); // ライトの方向
  scene.add(light);

  // アニメーション
  tickAnimation(); // 初回実行
  function tickAnimation() {
    requestAnimationFrame(tickAnimation);

    // 箱を回転させる
    box.rotation.x += 0.01; box.rotation.y += 0.01;
    // レンダリング (繰り返される)
    renderer.render(scene, camera);
  }
}
