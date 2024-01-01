import { create } from 'zustand';
import { dracula } from '@uiw/codemirror-theme-dracula';

import { Extension } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

interface Store {
  theme: Extension;
  setTheme: (theme: Extension) => void;
  language: Extension;
  setLanguage: (language: Extension) => void;
  fontSize: string;
  setFontSize: (fontSize: string) => void;
}

export const useStore = create<Store>((set) => ({
  theme: dracula,
  setTheme(theme) {
    set({ theme: theme });
  },
  language: javascript({ jsx: true }),
  setLanguage(language) {
    set({ language: language });
  },
  fontSize: '15',
  setFontSize(fontSize) {
    set({ fontSize: fontSize });
  },
}));
