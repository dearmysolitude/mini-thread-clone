import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null, // 전체 사용자 객체
      token: null,

      // 개별 필드들 (기존 코드와의 호환성을 위해 유지)
      userId: "",
      username: "",
      userPic: "",

      // 전체 사용자 정보 업데이트
      setUser: (userData) =>
        set((state) => ({
          user: userData,
          userId: userData.id || "",
          username: userData.name || "",
          userPic: userData.pic || "",
        })),

      // 토큰 업데이트
      setToken: (newToken) => set({ token: newToken }),

      // 로그인 (사용자 정보와 토큰을 동시에 설정)
      login: (userData, newToken) =>
        set((state) => ({
          user: userData,
          token: newToken,
          userId: userData.id || "",
          username: userData.name || "",
          userPic: userData.pic || "",
        })),

      // 로그아웃
      logout: () =>
        set({
          user: null,
          token: null,
          userId: "",
          username: "",
          userPic: "",
        }),

      // 개별 필드 업데이트 함수들 (기존 코드와의 호환성을 위해 유지)
      updateUserId: (newId) =>
        set((state) => ({
          userId: newId,
          user: state.user ? { ...state.user, id: newId } : null,
        })),
      updateUsername: (newName) =>
        set((state) => ({
          username: newName,
          user: state.user ? { ...state.user, name: newName } : null,
        })),
      updateUserPic: (newPic) =>
        set((state) => ({
          userPic: newPic,
          user: state.user ? { ...state.user, pic: newPic } : null,
        })),

      // 인증 상태 확인
      isAuthenticated: () => useUserStore.getState().token !== null,
    }),
    {
      name: "user-storage", // 로컬 스토리지에 저장될 키 이름
      getStorage: () => localStorage, // 저장소로 localStorage 사용
    }
  )
);
