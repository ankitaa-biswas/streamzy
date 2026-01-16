import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("stremzy-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("stremzy-theme",theme);
        set({ theme })
    },
  
}))
