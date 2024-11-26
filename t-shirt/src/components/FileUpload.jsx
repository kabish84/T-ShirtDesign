import React from "react";

const FileUpload = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onUpload(reader.result); // Pass the base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="my-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  );
};

export default FileUpload;
