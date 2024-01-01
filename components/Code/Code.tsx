'use client';
import { useStore } from '@/hooks/store';
import { useCodeMirror } from '@uiw/react-codemirror';
import { useEffect, useRef } from 'react';
import { color } from '@uiw/codemirror-extensions-color';
import { EditorView } from '@codemirror/view';
const code = "console.log('hello world!');\n\n\n";
// Define the extensions outside the component for the best performance.
// If you need dynamic extensions, use React.useMemo to minimize reference changes
// which cause costly re-renders.

interface CodeProps {}

export const Code = ({}: CodeProps) => {
  const { language, theme, fontSize } = useStore();

  const editor = useRef<HTMLDivElement>(null);
  const customFontSize = EditorView.theme({
    '.cm-content *': {
      fontSize: `${fontSize}px`,
      lineHeight: `${+fontSize * 1.5}px`,
    },
    '.cm-gutters': {
      fontSize: `${fontSize}px`,
      lineHeight: `${+fontSize * 1.5}px`,
    },
  });
  const { setContainer } = useCodeMirror({
    container: editor.current,
    theme: theme,
    height: '200px',
    width: '500px',

    extensions: [language, color, customFontSize],

    value: code,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return <div ref={editor}></div>;
};
