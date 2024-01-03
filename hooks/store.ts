import { create } from 'zustand';
import { dracula } from '@uiw/codemirror-theme-dracula';

import { Extension } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ThemeDefinition } from '@/types/types';
import { find } from '@/lib/find';
import { SUPPORTED_THEMES } from '@/lib/SThemes';
import { languages } from '@/lib/languages';

type DefaultSettings = {
  theme: string;
  language: string;
  fontSize: string;
  isLineNumber: boolean;
  surroundTheme: string;
  surroundPadding: string;
  editorWidth: string;
  title: string;
};
const defaultSettings: DefaultSettings = {
  theme: 'dracula',
  language: 'jsx',
  fontSize: '15',
  isLineNumber: true,
  surroundTheme: 'sky',
  surroundPadding: '32',
  editorWidth: '500',
  title: 'title.tsx',
};
interface Store {
  defaultSettings: DefaultSettings;
  theme: string;
  setTheme: (theme: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  fontSize: string;
  setFontSize: (fontSize: string) => void;
  isLineNumber: boolean;
  setIsLineNumber: (isLineNumber: boolean) => void;
  surroundTheme: string;
  setSurroundTheme: (label: string) => void;
  surroundPadding: string;
  setSurroundPadding: (surroundPadding: string) => void;
  editorWidth: string;
  setEditorWidth: (editorWidth: string) => void;
  title: string;
  setTitle: (title: string) => void;
}

export const useStore = create<Store>((set) => ({
  defaultSettings: defaultSettings,
  theme: 'dracula',
  setTheme(theme) {
    set({ theme: theme });
  },
  language: 'jsx',
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
  surroundTheme: 'sky',
  setSurroundTheme(label) {
    set({ surroundTheme: label });
  },
  surroundPadding: '32',
  setSurroundPadding(surroundPadding) {
    set({ surroundPadding });
  },
  editorWidth: '500',
  setEditorWidth(editorWidth) {
    set({ editorWidth });
  },
  title: 'title.tsx',
  setTitle(title) {
    set({ title });
  },
}));
