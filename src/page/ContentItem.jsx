import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store";
import LikesAndReplies from "./LikesAndReplies";
import EditPopup from "../components/EditPopup";

export default function ContentItem({ item, onDelete }) {
  const loggedInUser = useUserStore((state) => state.username);
  const navigate = useNavigate();
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleClick = (e) => {
    // 수정/삭제 버튼 클릭 시 상세 페이지로 이동하지 않도록 함
    if (e.target.tagName !== "BUTTON") {
      navigate(`/${item.username}/${item.contentId}`);
    }
  };

  const handleEdit = () => {
    setShowEditPopup(true);
  };

  const handleDelete = async () => {
    if (window.confirm("정말로 이 게시물을 삭제하시겠습니까?")) {
      try {
        // API 호출로 게시물 삭제
        // await deletePost(item.contentId);
        onDelete(item.contentId);
        // 삭제 후 현재 페이지 새로고침 또는 목록 업데이트
        // window.location.reload();
      } catch (error) {
        console.error("Delete failed:", error);
        alert("게시물 삭제에 실패했습니다.");
      }
    }
  };

  if (!item || !item.contentId) {
    console.error("ContentItem received invalid item:", item);
    return <div>Error: Invalid item data</div>;
  }

  const {
    authorName,
    username,
    contentId,
    faceUrl,
    timestamp,
    content,
    likes,
    replies,
  } = item;

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
          {username === loggedInUser && (
            <div className="mt-2">
              <button
                onClick={handleEdit}
                className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                수정
              </button>
              <button
                onClick={handleDelete}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                삭제
              </button>
            </div>
          )}
        </div>
      </div>
      {showEditPopup && (
        <EditPopup
          content={content}
          onClose={() => setShowEditPopup(false)}
          onSave={(editedContent) => {
            // API 호출로 게시물 수정
            // await updatePost(item.contentId, editedContent);
            console.log("Edited content:", editedContent);
            setShowEditPopup(false);
            // 수정 후 현재 페이지 새로고침 또는 목록 업데이트
            // window.location.reload();
          }}
        />
      )}
    </div>
  );
}
