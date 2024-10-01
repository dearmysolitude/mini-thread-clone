import { useLoaderData } from "react-router-dom";

export default function Profile() {
  const { profile } = useLoaderData();
  return (
    <div className="bg-threads-background-light dark:bg-threads-background-dark min-h-screen pt-[var(--header-height,0px)] flex justify-center">
      <div className="w-full max-w-[800px] px-4 sm:px-24">
        <div className="space-y0">
          <div
            key={profile.id}
            className={`
      bg-black dark:bg-gray-900 
      shadow-sm border-b border-gray-200 dark:border-gray-700
    `}
          >
            <div className="flex items-start mb-4 mx-8 mt-4">
              <img
                className="w-10 h-10 bg-threads-border-light dark:bg-threads-border-dark rounded-full mr-3 flex-shrink-0"
                src={profile.faceUrl}
                alt="LoadingProfilePic"
              />
              <div className="flex-grow mx-6">
                <div className="flex items-center space-x-2">
                  <p className="font-bold text-[13px] text-threads-text-primary-light dark:text-threads-text-primary-dark break-words">
                    {profile.userName}
                  </p>
                  <p className="text-sm text-threads-text-secondary-light dark:text-threads-text-secondary-dark break-words px-2">
                    {profile.timestamp}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
