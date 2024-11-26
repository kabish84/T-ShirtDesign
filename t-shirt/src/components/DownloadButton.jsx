import React from "react";

const DownloadButton = ({ design }) => {
  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const tShirtImg = new Image();
    const designImg = new Image();

    tShirtImg.src = "/tshirt.jpg"; // Blank T-shirt image
    designImg.src = design;

    tShirtImg.onload = () => {
      canvas.width = tShirtImg.width;
      canvas.height = tShirtImg.height;

      ctx.drawImage(tShirtImg, 0, 0);
      if (design) ctx.drawImage(designImg, 100, 150, 200, 200); // Adjust position and size
      const link = document.createElement("a");
      link.download = "custom-tshirt.jpg";
      link.href = canvas.toDataURL();
      link.click();
    };
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      disabled={!design}
    >
      Download T-Shirt
    </button>
  );
};

export default DownloadButton;
