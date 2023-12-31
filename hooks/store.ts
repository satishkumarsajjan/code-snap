import { create } from 'zustand';
import { dracula } from '@uiw/codemirror-theme-dracula';

import { Extension } from '@uiw/react-codemirror';

interface Store {
  theme: Extension;
  setTheme: (theme: Extension) => void;
}

export const useStore = create<Store>((set) => ({
  theme: dracula,
  setTheme(theme) {
    set({ theme: theme });
  },
}));
