import React from "react";
import { useNavigate } from "react-router-dom";
import LikesAndReplies from "./LikesAndReplies";

export default function ContentItem({ item }) {
  // console.log("ContentItem props:", { item }); // 디버깅을 위한 로그

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/content/${item.contentId}`);
  };

  if (!item || !item.contentId) {
    console.error("ContentItem received invalid item:", item);
    return <div>Error: Invalid item data</div>;
  }

  const { authorName, contentId, faceUrl, timestamp, content, likes, replies } =
    item;

  return (
    <div
      onClick={handleClick}
      className="py-1 cursor-pointer relative border-b border-threads-border-light dark:border-threads-border-dark text-pretty"
    >
      <div className="flex items-start mb-4 mx-8 mt-4">
        <img
          className="w-10 h-10 bg-threads-border-light dark:bg-threads-border-dark rounded-full mr-3 flex-shrink-0"
          src={faceUrl}
          alt="LoadingProfilePic"
        />
        <div className="flex-grow mx-6">
          <div className="flex items-center space-x-2">
            <p className="font-bold text-[13px] text-threads-text-primary-light dark:text-threads-text-primary-dark break-words">
              {authorName}
            </p>
            <p className="text-sm text-threads-text-secondary-light dark:text-threads-text-secondary-dark break-words px-2">
              {timestamp}
            </p>
          </div>
          <p className="text-[13px] text-threads-text-primary-light dark:text-threads-text-primary-dark break-words">
            {content}
          </p>
          <LikesAndReplies
            contentId={contentId}
            likes={likes}
            replies={replies}
          />
        </div>
      </div>
    </div>
  );
}
