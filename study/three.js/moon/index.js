window.addEventListener('DOMContentLoaded', init);

function init() {
  // サイズを指定
  const width = 960;
  const height = 540;
  let rot = 0; // 角度
  let mouseX = 0; // マウス座標

  // レンダリング
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
  });
  renderer.setSize(width, height);
  const scene = new THREE.Scene();

  // カメラ
  const camera = new THREE.PerspectiveCamera(45, width / height);

  // ライティング
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // マテリアル
  const material = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("./img.jpg"),
    side: THREE.DoubleSide,
  });

  // メッシュ
  const geometry = new THREE.SphereGeometry(300, 30, 30);
  const earthMesh = new THREE.Mesh(geometry, material);
  scene.add(earthMesh);

  // 星屑
  createStarField();
  function createStarField() {
    const vertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = 3000 * (Math.random() - 0.5);
      const y = 3000 * (Math.random() - 0.5);
      const z = 3000 * (Math.random() - 0.5);
      vertices.push(x, y, z);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
      size: 10,
      color: 0xffffff,
    });

    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh);
  }

  // マウス座標はマウスが動いた時のみ取得できる
  document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
  });


  // 毎フレーム時に実行されるループイベントです
  tick();
  function tick() {
    // マウスの位置に応じて角度を設定
    // マウスのX座標がステージの幅の何%の位置にあるか調べてそれを360度で乗算する
    const targetRot = (mouseX / window.innerWidth) * 360;
    // イージングの公式を用いて滑らかにする
    // 値 += (目標値 - 現在の値) * 減速値
    rot += (targetRot - rot) * 0.02;

    // ラジアンに変換する
    const radian = (rot * Math.PI) / 180;
    // 角度に応じてカメラの位置を設定
    camera.position.x = 1000 * Math.sin(radian);
    camera.position.z = 1000 * Math.cos(radian);
    // 原点方向を見つめる
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    // 常に回転させておく
    earthMesh.rotation.y += 0.01;

    // レンダリング
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  }
}
