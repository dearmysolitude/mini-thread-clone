import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserNav from "../components/UserNav";

function getPageName(pathName) {
  if (pathName === "/") {
    return "홈";
  } else if (pathName.startsWith("/profile/")) {
    return "사용자 정보";
  } else if (pathName.startsWith("/write")) {
    return "새 글 쓰기";
  } else {
    return "스레드";
  }
}

export default function Root() {
  const location = useLocation();
  const pageName = getPageName(location.pathname);

  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      {/* 페이지 폭이 일정 수준 이상에서만 보이도록 해야 */}
      <nav className="w-20 fixed left-0 top-0 bottom-0 bg-transparent z-30">
        <Sidebar />
      </nav>

      <div className="flex flex-col flex-grow">
        <header className="sticky top-0 z-20 bg-white dark:bg-threads-background-primary-dark shadow-sm h-14">
          <Header pageName={pageName} />
        </header>
        <UserNav />
        <main className="flex-grow p-2 padding-0 bg-threads-background-primary-light dark:bg-threads-background-primary-dark min-h-screen pt-[var(--header-height,0px)] flex justify-center items-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
