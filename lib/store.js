import { create } from 'zustand';

const useStore = create((set) => ({
  showForm: false,
  toggleForm: () => set((state) => ({ showForm: !state.showForm })),
  scrollInstance: null,
  setScrollInstance: (instance) => set({ scrollInstance: instance })
}));

export default useStore;