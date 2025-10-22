import React from 'react';
import { GooeyLoader } from "@/components/ui/loader-10"; // Import the new loader

function Spinner() {
  return (
    // Centering container that takes up the full available height
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] w-full">
      <GooeyLoader
        primaryColor="#0e3e68" // Your Brand Dark Color
        secondaryColor="#1a5f9a" // Your Brand Light Color
        borderColor="#e5e7eb" // Keep a light border (gray-200)
        size={80} // Optional: Adjust size if needed
      />
    </div>
  );
}

export default Spinner;