import React, { useState } from "react";
import TShirtPreview from "./components/TShirtPreview";
import FileUpload from "./components/FileUpload";
import DownloadButton from "./components/DownloadButton";

const App = () => {
  const [design, setDesign] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Custom T-Shirt Designer</h1>
      <TShirtPreview design={design} />
      <FileUpload onUpload={setDesign} />
      <DownloadButton design={design} />
    </div>
  );
};

export default App;
