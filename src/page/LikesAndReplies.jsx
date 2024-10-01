import React from "react";
import { Heart, MessageCircle } from "lucide-react";

export default function LikesAndReplies({ contentId, likes, replies }) {
  return (
    <div className="flex justify-between text-gray-500 mt-2">
      {/* <button className="flex items-center">
        <Heart className="w-5 h-5 mr-1" />
        <span>{likes}</span>
      </button> */}
      <button className="flex items-center">
        <MessageCircle className="w-5 h-5 mr-1" />
        <span>{replies}</span>
      </button>
    </div>
  );
}
