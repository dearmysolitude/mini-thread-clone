import { useLoaderData } from "react-router-dom";

export default function Profile() {
  const { profile } = useLoaderData();

  return (
    <div className="flex-grow bg-threads-background-light dark:bg-threads-background-dark">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div
            key={profile.id}
            className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center">
                <img
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  src={profile.faceUrl}
                  alt={`${profile.userName}'s profile`}
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    유저명: {profile.userName}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    가입일: {new Date(profile.timestamp).toLocaleDateString()}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    이메일: {profile.email}
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
