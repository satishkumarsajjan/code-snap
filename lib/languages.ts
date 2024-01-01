import { angular } from '@codemirror/lang-angular';
import { cpp } from '@codemirror/lang-cpp';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';

import { json } from '@codemirror/lang-json';
import { less } from '@codemirror/lang-less';
import { lezer } from '@codemirror/lang-lezer';
import { liquid } from '@codemirror/lang-liquid';
import { markdown } from '@codemirror/lang-markdown';
import { php } from '@codemirror/lang-php';
import { rust } from '@codemirror/lang-rust';
import { sass } from '@codemirror/lang-sass';
import { vue } from '@codemirror/lang-vue';
import { wast } from '@codemirror/lang-wast';

export const languages = new Map();
languages.set('angular', angular());
languages.set('cpp', cpp());
languages.set('css', css());
languages.set('html', html());
languages.set('java', java());
languages.set('javascript', javascript());
languages.set('json', json());
languages.set('jsx', javascript({ jsx: true }));
languages.set('less', less());
languages.set('lezer', lezer());
languages.set('liquid', liquid());
languages.set('markdown', markdown());
languages.set('php', php());
languages.set('python', python());
languages.set('rust', rust());
languages.set('sass', sass());
languages.set('tsx', javascript({ jsx: true, typescript: true }));
languages.set('typescript', javascript({ typescript: true }));
languages.set('vue', vue());
languages.set('wast', wast());

export const LanguagesArray = [
  { value: 'angular' },
  { value: 'cpp' },
  { value: 'css' },
  { value: 'html' },
  { value: 'java' },
  { value: 'javascript' },
  { value: 'json' },
  { value: 'jsx' },
  { value: 'less' },
  { value: 'lezer' },
  { value: 'liquid' },
  { value: 'markdown' },
  { value: 'php' },
  { value: 'python' },
  { value: 'rust' },
  { value: 'sass' },
  { value: 'tsx' },
  { value: 'typescript' },
  { value: 'vue' },
  { value: 'wast' },
];
