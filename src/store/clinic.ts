import { create } from 'zustand'

type Store = {
    activeId: number
    setActiveId: (activeId: number) => void
  }

export const useClinicStore = create<Store>()((set) => ({
    activeId: 0,
    setActiveId: (activeId) => set({activeId}),
  }))