import React from "react";

const TShirtPreview = ({ design }) => {
  return (
    <div className="relative flex justify-center items-center h-80 w-80 bg-gray-200">
      {/* Blank T-Shirt */}
      <img 
        src="/image.jpg" // Blank T-shirt in public folder
        alt="T-shirt"
        className="absolute h-full w-auto object-contain"
      />

      {/* Uploaded Design */}
      {design && (
        <img
          src={design}
          alt="Uploaded Design"
          className="absolute"
          style={{
            height: "40%", // Adjust this to control design size
            width: "auto",
            top: "40%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)",
            objectFit: "contain", // Prevent image distortion
            zIndex: 10, // Make sure it's above the T-shirt
          }}
        />
      )}
    </div>
  );
};

export default TShirtPreview;
