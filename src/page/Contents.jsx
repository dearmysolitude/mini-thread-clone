import React, { useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import ContentItem from "./ContentItem";

export default function Contents() {
  const { items } = useLoaderData();

  // const { contentId } = useParams();
  // const location = useLocation();

  return (
    <div className="w-full max-w-[650px] shadow-sm border-b border-gray-200 dark:border-gray-700 dark:bg-threads-background-secondary-dark shadow-2xl dark:border-threads-border-dark border">
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <div key={item.contentId}>
            <ContentItem item={item} />
          </div>
        ))
      ) : (
        <p className="text-center py-4 text-white">No Contents Available</p>
      )}
    </div>
  );
}
