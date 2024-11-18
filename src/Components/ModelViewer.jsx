// ModelViewer.js (in the Components folder)
import React, {Suspense, useRef} from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './MainPage.css';

// ***************Simple Error Boundary Component ***********************
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Model Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong loading the 3D model.</div>;
    }
    return this.props.children;
  }
}

function LongPenObject() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('./longPen.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
         scale={[1.1, 1.1, 1.1]} //adjust size x,y,z
      position={[-5.3, 15, 0]} // Center position
      rotation={[Math.PI/2, Math.PI / 2, 0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}

function SDCardObject() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/sdCard.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
         scale={[1.2, 1.2, 1.2]} 
      position={[2.3,-0.4, 0]} // Center position
      rotation={[Math.PI/2, 0, 0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}

function LargeWheelObject() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/myportfolio/largeWheel.glb'); // Adjust path as needed
  return (
      <primitive 
      object={gltf.scene} 
      scale={[1, 1, 1]} 
      position={[-13.8, 7.5, 0]} 
      rotation={[Math.PI/2, Math.PI / 2, 0]} 
      />
  );
}


function LighterBulbObject() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/myportfolio/lightbulbFixed.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1.2, 1.2, 1.2]} //adjust size x,y,z
      position={[6.2, 5.6, 2]} // Center position
      rotation={[ Math.PI / 2 +0.4, 0,0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}
function Pencil2Object() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/pencil2.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1, 1, 1]} //adjust size x,y,z
      position={[7.3, -9.9, -3]} // Center position
      rotation={[0, 0, Math.PI / 2]} 
      />
  );
}
 
//Now the wheel will spin in place around its z-axis while maintaining its 
//position at [4.4, 4.6, 0]. The rotation [Math.PI / 2, 0, 0] sets its initial
// orientation, and the useFrame hook adds continuous rotation around the z-axis.

function SmallWheelObject(props) {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/wheel.glb'); // Adjust path as needed

 //Applied the rotation directly to the wheel primitive using wheelRef
  const wheelRef = useRef(); // Create a local ref

  useFrame(() => {
       if (wheelRef.current) {
      // Rotate around its own axis (z-axis in this case)
      wheelRef.current.rotation.y += 0.015;
    }
  });

  return (
      <primitive
      {...props}
      ref={wheelRef}
      object={gltf.scene}
      scale={[1.2, 1.2, 1.2]}
      position={[2.2, -4.3, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

function Eraser() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/simpleEraser.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1.3, 1.3, 1.3]} //adjust size x,y,z
      position={[8, 4.3, -3]} // Center position
      rotation={[Math.PI / 7, 0, 0]} 
      />
  );
}


function Eraser2() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/Eraser2.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1, 1, 1]} //adjust size x,y,z
      position={[-10, -1, 0]} // Center position
      rotation={[Math.PI / 2 , -Math.PI / 2 , 0]} 
      />
  );
}

function USB() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/usb.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1.3, 1.3, 1.3]} //adjust size x,y,z
      position={[-7.3, 4.5, 0]} // Center position
      rotation={[Math.PI / 2, 0, 0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}

function AudioBox() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/audioBox.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1.3, 1.3, 1.3]} //adjust size x,y,z
      position={[6.4, 7.7, -2]} // Center position
      rotation={[Math.PI / 4, -0.5, 0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}

function ToolKit() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/toolKit.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1.4, 1.4, 1.4]} //adjust size x,y,z
      position={[-4, 6.3, 0]} // Center position
      rotation={[Math.PI / 2, 0, 0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}


function SmallCircle() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/smallCircle.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1.4, 1.4, 1.4]} //adjust size x,y,z
      position={[4.5, 5.7, 0]} // Center position
      rotation={[Math.PI / 2, 0, 0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}

function SmallCircleWithTriangle() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/smallCirclewithTriangle.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1.4, 1.4, 1.4]} //adjust size x,y,z
      position={[-6.5, 5, 0]} // Center position
      rotation={[Math.PI / 2, 0, 0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}

function SmallDiamond() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/smallDiamond.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1.4, 1.4, 1.4]} //adjust size x,y,z
      position={[13.5, -6.5, 0]} // Center position
      rotation={[Math.PI / 2, 0.1, 0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}

function SmallSquare() {
  //Instantiate a loader for the .gltf file
  const gltf = useGLTF('/smallSquare.glb'); // Adjust path as needed
  return (
      <primitive 
        object={gltf.scene} 
        scale={[1.4, 1.4, 1.4]} //adjust size x,y,z
      position={[-11.5, -5.5, 0]} // Center position
      rotation={[Math.PI / 2, 0, 0]} 
      //Math.PI/2- 90 degrees
      //x- tilts object forward or backward; y-turns left or right x-tilts clockwise or counterclockwise
      />
  );
}

function SwingingObjects() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime  = clock.getElapsedTime();

    // Oscillate between -0.1 and 0.2 for y rotation
    groupRef.current.rotation.y = Math.sin(elapsedTime * 1)  * 0.15 + 0.05;; 
   groupRef.current.rotation.z = Math.sin(elapsedTime * 1) * 0.05; // Adjust speed and range

  });

  return (
    <group ref={groupRef}>
      <LongPenObject />
      <SDCardObject />
      <LargeWheelObject />
      <Pencil2Object />
      <LighterBulbObject />
      <SmallWheelObject />
              <Eraser />
              <Eraser2 />
              <AudioBox />
              <ToolKit />
              <USB />
              <SmallCircle />
              <SmallCircleWithTriangle />
              <SmallDiamond />
              <SmallSquare />
      {/* Add other objects here */}
    </group>
  );
}


function ModelViewer() {
  //adjusts the size of the 3d canvas; ex. if push this to the left,
  // 3d objects will be cut off at the left side
  //have to subtract 40px on height to account for navbar
  return (
     <div className='modelViewStyle'
     >
      <ErrorBoundary fallback={<div>Error loading 3D model</div>}>
      <Suspense fallback={<div>Loading...</div>}>
          <Canvas camera={{ position: [0, 0, 150], fov: 7, near: 0.1, far: 500}}
          //x (left or right), y (up or down), z (closer to or further from model)
          //fov- field of view- angle to determine how much of the scene the camera captures
          >
            <ambientLight intensity={1.7} //even lighting across entire scene, doesn't create shadows, parameters: color, intensity
              />
            <directionalLight 
            position={[0,0,2]} 
            intensity={1.6} 
            />
          {/* Set a floor or surface to receive shadows */}

            <OrbitControls
            enableZoom={false}    // Disable zoom
            enableRotate={false}  // Disable rotation
            enablePan={false}     // Disable panning too since you probably don't want that
            />
             <SwingingObjects />
          </Canvas>
      </Suspense>
      </ErrorBoundary>
     </div>
  );
}

export default ModelViewer;