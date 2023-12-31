'use client';
import { useEffect, useMemo, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { androidstudio } from '@uiw/codemirror-theme-androidstudio';
import { useStore } from '@/hooks/store';
const code = "console.log('hello world!');\n\n\n";
// Define the extensions outside the component for the best performance.
// If you need dynamic extensions, use React.useMemo to minimize reference changes
// which cause costly re-renders.
const extensions = [javascript({ jsx: true })];

interface CodeProps {}

export const Code = ({}: CodeProps) => {
  console.log(typeof androidstudio);
  const { theme, setTheme } = useStore();
  const editor = useRef<HTMLDivElement>(null);
  const { setContainer } = useCodeMirror({
    container: editor.current,
    theme: theme,
    height: '200px',
    width: '500px',

    extensions,
    value: code,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return <div ref={editor}></div>;
};
