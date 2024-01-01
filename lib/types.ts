import { Extension } from '@uiw/react-codemirror';

export type LanguageDefinition = {
  id: string;
  label: string;
  extension: () => Promise<Extension>;
};
