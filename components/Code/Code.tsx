'use client';
import { useStore } from '@/hooks/store';
import { useCodeMirror } from '@uiw/react-codemirror';
import { useEffect, useRef } from 'react';
import { color } from '@uiw/codemirror-extensions-color';
import { EditorView } from '@codemirror/view';
import { cn } from '@/lib/utils';
const code = "console.log('hello world!');\n\n\n";
// Define the extensions outside the component for the best performance.
// If you need dynamic extensions, use React.useMemo to minimize reference changes
// which cause costly re-renders.

interface CodeProps {}

export const Code = ({}: CodeProps) => {
  const { language, theme, fontSize, isLineNumber, editorWidth } = useStore();

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

  const customStyles = EditorView.baseTheme({
    '&.cm-editor': {
      fontWeight: 400,
      maxHeight: '700px',
      minHeight: '100px',
    },

    '&.cm-editor.cm-focused': {
      outline: 'none',
      border: '50px',
    },

    '&.cm-gutterElement': {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: '1rem !important',
      letterSpacing: '.1px',
    },
  });
  const lineWrapping = EditorView.lineWrapping;
  const setTabIndex = EditorView.contentAttributes.of({ tabIndex: '-1' });

  const { setContainer } = useCodeMirror({
    container: editor.current,
    theme: theme,
    placeholder: '//Add some code here...',
    width: `${editorWidth}px`,
    basicSetup: {
      lineNumbers: isLineNumber,
      foldGutter: false,
      autocompletion: false,
      indentOnInput: false,
      highlightActiveLine: true,
      highlightActiveLineGutter: false,
      dropCursor: true,
      searchKeymap: false,
      lintKeymap: false,
      completionKeymap: false,
      foldKeymap: false,
      bracketMatching: true,
    },

    extensions: [
      language,
      color,
      customFontSize,
      customStyles,
      lineWrapping,
      setTabIndex,
    ],

    value: code ?? '',
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return (
    <div ref={editor} className={cn('rounded-lg drop-shadow-2xl p-0')}></div>
  );
};
