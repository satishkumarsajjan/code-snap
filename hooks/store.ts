import { create } from 'zustand';
import { dracula } from '@uiw/codemirror-theme-dracula';

import { Extension } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ThemeDefinition } from '@/types/types';
import { find } from '@/lib/find';
import { SUPPORTED_THEMES } from '@/lib/SThemes';

interface Store {
  theme: Extension;
  setTheme: (theme: Extension) => void;
  language: Extension;
  setLanguage: (language: Extension) => void;
  fontSize: string;
  setFontSize: (fontSize: string) => void;
  isLineNumber: boolean;
  setIsLineNumber: (isLineNumber: boolean) => void;
  surroundTheme: ThemeDefinition;
  setSurroundTheme: (label: string) => void;
  surroundPadding: string;
  setSurroundPadding: (surroundPadding: string) => void;
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
  isLineNumber: true,
  setIsLineNumber(isLineNumber) {
    set({ isLineNumber: isLineNumber });
  },
  surroundTheme: find(SUPPORTED_THEMES, 'sky'),
  setSurroundTheme(label) {
    set({ surroundTheme: find(SUPPORTED_THEMES, label) });
  },
  surroundPadding: '16',
  setSurroundPadding(surroundPadding) {
    set({ surroundPadding });
  },
}));
