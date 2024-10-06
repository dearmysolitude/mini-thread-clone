import React, { useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import ContentItem from "./ContentItem";

export default function Contents() {
  const { items } = useLoaderData();

  // const { contentId } = useParams();
  // const location = useLocation();

  return (
    <div className="w-full max-w-[800px] px-4 sm:px-24">
      {items && items.length > 0 ? (
        <div className="space-y0">
          {items.map((item, index) => (
            <div
              key={item.contentId}
              className={`
                  bg-black dark:bg-gray-900 
                  shadow-sm border-b border-gray-200 dark:border-gray-700
                `}
            >
              <ContentItem item={item} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-4 text-white">No Contents Available</p>
      )}
    </div>
  );
}
