import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store";
import { useState } from "react";
import { CircleUserRound } from "lucide-react"; // Lucide 아이콘 사용
import { PhotoIcon } from "@heroicons/react/24/solid";

export default function NewThread() {
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsLoading(true);
    try {
      // 이미지, 동영상 파일에 대한 업로드 로직 필요
      const response = await fetch("https://your-api-endpoint.com/threads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content, userId: user.id }),
      });

      if (!response.ok) throw new Error("Failed to create thread");

      navigate("/"); // 성공 시 홈페이지로 리다이렉트
    } catch (error) {
      console.error("Error creating new thread:", error);
      // 에러 처리 로직 (예: 사용자에게 알림)
    } finally {
      setIsLoading(false);
    }
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageTpye = file.type.startsWith("image");
      const videoTpye = file.type.startsWith("video");
      setFile({
        url: URL.createObjectURL(e.target.files[0]),
        image: imageTpye,
        video: videoTpye,
      });
    } else {
      setFile(null);
    }
  };

  return (
    <div
      className="flex flex-col justify-center
        w-full max-w-[650px] dark:bg-threads-background-secondary-dark rounded-2xl dark:border-threads-border-dark border"
    >
      <div className="px-4 sm:rounded-lg sm:px-10 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="content" className="sr-only">
              내용
            </label>
            <div className="w-full p-3">
              {file ? (
                <div className="relative">
                  {file.image && (
                    <img
                      src={file.url}
                      className="w-full h-auto max-h-[350px] object-contain"
                      alt="Uploaded image"
                    />
                  )}
                  {file.video && (
                    <video
                      src={file.url}
                      controls
                      className="w-full max-w-[350px] h-auto object-contain"
                    />
                  )}
                  <button
                    onClick={() => imageUpload({ target: { files: [] } })}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <PhotoIcon
                    aria-hidden="true"
                    className="mx-auto h-12 w-12 text-gray-300"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={imageUpload}
                        accept="image/*,video/*"
                      />
                    </label>
                  </div>
                  <p className="text-xs leading-5 dark:text-threads-text-secondary-dark mt-2">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              )}
            </div>

            <textarea
              id="content"
              name="content"
              rows="10"
              className="appearance-none block w-full px-3 py-2 dark:border-threads-border-dark rounded-2xl shadow-sm dark:placeholder-threads-text-secondary-dark dark:bg-threads-background-third-dark text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="무슨 일이 있었나요?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "게시 중..." : "게시하기"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
