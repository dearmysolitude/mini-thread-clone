import { create } from "zustand";

const useUserStore = create((set) => ({
  username: "",
  updateUsername: (newName) => set({ username: newName }),
  userPic: "",
  updateUserPic: (newPic) => set({ userPic: newPic }),
}));

export default useUserStore;
