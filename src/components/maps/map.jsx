// import React, { useEffect, useRef } from "react";
// import './map.css';

// const Map = ({ latitude, longitude, city, temperature }) => {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     const receiveMessage = event => {
//       if (event.origin !== "https://www.google.com") return; // Ensure message is from the Google Maps domain
//       const { lat, lng } = event.data;
//       console.log("Latitude:", lat);
//       console.log("Longitude:", lng);
//     };

//     window.addEventListener("message", receiveMessage);

//     return () => {
//       window.removeEventListener("message", receiveMessage);
//     };
//   }, []);

//   if (!latitude || !longitude) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <iframe
//         ref={iframeRef}
//         id="mapp"
//         title="Embedded Google Map"
//         src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.357717438862!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f130.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}!5e0!3m2!1sen!2sus!4v1648255126721!5m2!1sen!2sus&q=${latitude}, ${longitude}`}
//         style={{ border: "0" }}
//         allowFullScreen=""
//         loading="lazy"
//       ></iframe>
//       <p className="mapLabel">Temperature at {city} is {temperature}°C</p>
//     </div>
//   );
// };

// export default Map;


import React, { useEffect, useRef } from "react";
import './map.css';

const Map = ({ latitude, longitude, city, temperature }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const receiveMessage = event => {
      if (event.origin !== "https://www.google.com") return; // Ensure message is from the Google Maps domain
      const { lat, lng } = event.data;
      console.log("Latitude:", lat);
      console.log("Longitude:", lng);
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  if (!latitude || !longitude) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <iframe
        ref={iframeRef}
        id="mapp"
        title="Embedded Google Map"
        // src={`https://earth.nullschool.net/#current/wind/surface/level/orthographic=-277.03,12.02,2556/loc=${latitude},${longitude}`}
        src={`https://map.worldweatheronline.com/temperature?lat=${latitude}&lng=${longitude}&zoom=10`}
        // src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${latitude}&lon=${longitude}&zoom=22`}
        // src={`https://tile.openweathermap.org/map/wind_new/1/0/1?appid=f2467dc967979b5afd9ea7923fe86df4`}

        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
