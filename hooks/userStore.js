import {create} from 'zustand';

const useUserStore = create((set) => ({
  userData: null,
  setUser: (data) => set({ userData: data }),
  clearUser: () => set({ userData: null }),
}));

export default useUserStore;