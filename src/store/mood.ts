import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Mood = 'subah' | 'shaam' | 'raat';

interface MoodState {
  currentMood: Mood;
  setMood: (mood: Mood) => void;
}

export const useMoodStore = create<MoodState>()(
  persist(
    (set) => ({
      currentMood: 'subah',
      setMood: (mood) => {
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-mood', mood);
        }
        set({ currentMood: mood });
      },
    }),
    {
      name: 'afforah-mood-storage',
      onRehydrateStorage: () => (state) => {
        if (state && typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-mood', state.currentMood);
        }
      },
    }
  )
);
