import { CircleUserRound } from "lucide-react"; // Lucide 아이콘 사용
import { Link } from "react-router-dom";
import useUserStore from "../store";

export default function UserNav() {
  const { username, userPic } = useUserStore();

  const routingAdd = username ? "/profile" : "/login";

  return (
    <div className="fixed top-5 right-10 z-50 flex justify-end">
      {username ? (
        <Link
          to={routingAdd}
          className="block w-10 h-10 rounded-full overflow-hidden shadow-lg"
          aria-label="View Profile"
        >
          {userPic ? (
            <img
              src={userPic}
              alt={username}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <CircleUserRound
                size={20}
                className="text-gray-500 dark:text-gray-400"
              />
            </div>
          )}
        </Link>
      ) : (
        <Link
          to="/login"
          className="inline-block px-4 py-2 rounded-lg bg-threads-action-default hover:bg-threads-action-hover text-black font-semibold text-sm transition-colors duration-200 shadow-lg"
        >
          로그인
        </Link>
      )}
    </div>
  );
}
