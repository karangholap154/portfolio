import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export const Earth3D = () => {
  const globeEl = useRef<any>();

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate the globe
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      
      // Set initial point of view to show India
      globeEl.current.pointOfView({ lat: 20, lng: 77, altitude: 2 }, 1000);
    }
  }, []);

  // Location markers (white dots on the globe)
  const markers = [
    // India region markers (red)
    { lat: 19.0760, lng: 72.8777, color: "#ef4444", size: 0.3 }, // Mumbai
    { lat: 28.7041, lng: 77.1025, color: "#ef4444", size: 0.3 }, // Delhi
    { lat: 12.9716, lng: 77.5946, color: "#ef4444", size: 0.3 }, // Bangalore
    { lat: 22.5726, lng: 88.3639, color: "#ef4444", size: 0.3 }, // Kolkata
    
    // Other locations (white)
    { lat: 40.7128, lng: -74.0060, color: "#ffffff", size: 0.25 }, // New York
    { lat: 51.5074, lng: -0.1278, color: "#ffffff", size: 0.25 }, // London
    { lat: 35.6762, lng: 139.6503, color: "#ffffff", size: 0.25 }, // Tokyo
    { lat: -33.8688, lng: 151.2093, color: "#ffffff", size: 0.25 }, // Sydney
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl={null}
        backgroundColor="rgba(0,0,0,0)"
        
        // Location markers
        pointsData={markers}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointRadius="size"
        pointAltitude={0.01}
        pointsMerge={true}
        
        // Atmosphere settings
        atmosphereColor="#00bfff"
        atmosphereAltitude={0.15}
        
        // Performance settings
        animateIn={true}
        waitForGlobeReady={true}
        
        // Height
        height={400}
        width={400}
      />
    </div>
  );
};
