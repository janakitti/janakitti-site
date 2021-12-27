import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'dat.gui';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  numLandingImages: number = 3;
  landingImg: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.landingImg = Math.floor(Math.random() * this.numLandingImages);
    // const gui = new dat.GUI()
    THREE.Object3D.prototype.rotateAroundWorldAxis = function() {
      
      var q1 = new THREE.Quaternion();
      return function ( point, axis, angle ) {
  
          q1.setFromAxisAngle( axis, angle );
  
          this.quaternion.multiplyQuaternions( q1, this.quaternion );
  
          this.position.sub( point );
          this.position.applyQuaternion( q1 );
          this.position.add( point );
          return this;
      }
  
  }();



    const loader = new GLTFLoader();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize( window.innerWidth, window.innerHeight );

    renderer.physicallyCorrectLights = true;
renderer.outputEncoding =  THREE.sRGBEncoding;

renderer.gammaOutput =  true;
renderer.gammaFactor =  2.2;
    document.getElementById("landing-img").appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    let model;
    loader.load( '../../../assets/3d/shard0.glb', function ( gltf ) {
      model = gltf.scene;
      console.log(model)
      model.traverse(function(child){
        if(child.isMesh === true){
            child.material.transparent = true;
            child.material.opacity = 0;
        }
    });
      scene.add( gltf.scene );
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );

    const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
    hemiLight.position.set( 0, 10, 5 );
    scene.add( hemiLight );

    var dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set( 0, 0, 5 );
    scene.add( dirLight );



    camera.position.z = 6;
    camera.rotation.z = 0.65;

let a = 0;
    function animate() {
      requestAnimationFrame( animate );

      // model.rotation.x += 0.01;
      if (model)
      {
        model.rotation.y += 0.002;
      }
      a += 0.0001;
      // model?.rotateAroundWorldAxis(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.5000, 0.8660, 0), a);
      renderer.render( scene, camera );
    };

    animate();
  }
}
