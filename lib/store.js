import { create } from 'zustand';

const useStore = create((set) => ({
  showForm: false,
  toggleForm: () => set((state) => ({ showForm: !state.showForm })),
}));

export default useStore;