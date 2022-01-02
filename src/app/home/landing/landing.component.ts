import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements AfterViewInit {
  private model: THREE.Group;
  private scene: THREE.Scene;
  private loader: THREE.GLTFLoader;
  private camera: THREE.Camera;
  private renderer: THREE.Renderer;
  private isResized = false;

  constructor() {}

  private createScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;

    document
      .getElementById('landing-img')
      .appendChild(this.renderer.domElement);

    this.loader = new GLTFLoader();
    this.loader.load(
      '../../../assets/3d/shard0.glb',
      (gltf: GLTF) => {
        this.model = gltf.scene;
        this.model.traverse((child) => {
          if (child.isMesh === true) {
            child.material.transparent = true;
            child.material.opacity = 0;
          }
        });
        this.scene.add(this.model);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene.add(ambientLight);

    var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 10, 5);
    this.scene.add(hemiLight);

    var dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(0, 0, 5);
    this.scene.add(dirLight);

    this.setCameraDistance();
    this.camera.rotation.z = 0.65;
  }

  private setCameraDistance() {
    if (window.innerWidth < 768) {
      this.camera.position.z = 12;
    } else {
      this.camera.position.z = 6;
    }
  }

  private resizeCanvasToDisplaySize() {
    this.isResized = false;
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Update the camera
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.setCameraDistance();
  }

  private startRenderingLoop() {
    let component: LandingComponent = this;
    function animate() {
      requestAnimationFrame(animate);
      if (component.isResized) {
        component.resizeCanvasToDisplaySize();
      }

      if (component.model) {
        component.model.rotation.y += 0.002;
      }
      component.renderer.render(component.scene, component.camera);
    }
    animate();
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', () => (this.isResized = true));
    this.createScene();
    this.startRenderingLoop();
  }
}
