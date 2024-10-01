import React, { useState } from "react";

export default function Header({ pageName }) {
  return (
    <header className="bg-transparent w-full h-full flex items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <div className="text-gray-600 dark:text-gray-300 font-bold">
          {pageName}
        </div>
      </div>
    </header>
  );
}
