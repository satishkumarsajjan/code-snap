'use client';

import { useStore } from '@/hooks/store';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { SUPPORTED_THEMES } from '@/lib/SThemes';
import { find } from '@/lib/find';

interface ResetProps {}

export const Reset = ({}: ResetProps) => {
  const [isDefault, setIsDefault] = useState<boolean>(true);
  const {
    defaultSettings,
    editorWidth,
    fontSize,
    isLineNumber,
    language,
    surroundPadding,
    surroundTheme,
    title,
    theme,
    setEditorWidth,
    setFontSize,
    setIsLineNumber,
    setLanguage,
    setSurroundPadding,
    setSurroundTheme,
    setTheme,
    setTitle,
  } = useStore();
  //   console.log(defaultSettings.theme === theme, 'theme');
  //   console.log(defaultSettings.fontSize === fontSize, 'fontsize');
  //   console.log(defaultSettings.isLineNumber === isLineNumber, 'isLineNumber');
  //   console.log(defaultSettings.language === language, 'language');
  //   console.log(defaultSettings.surroundPadding === surroundPadding);
  //   console.log(defaultSettings.surroundTheme === surroundTheme);
  //   console.log(defaultSettings.theme === theme);
  //   console.log(defaultSettings.title === title);
  useEffect(() => {
    if (
      defaultSettings.editorWidth === editorWidth &&
      defaultSettings.fontSize === fontSize &&
      defaultSettings.isLineNumber === isLineNumber &&
      defaultSettings.language === language &&
      defaultSettings.surroundPadding === surroundPadding &&
      defaultSettings.surroundTheme === surroundTheme &&
      defaultSettings.theme === theme &&
      defaultSettings.title === title
    ) {
      setIsDefault(true);
    } else {
      setIsDefault(false);
    }
  }, [
    editorWidth,
    fontSize,
    isLineNumber,
    language,
    surroundPadding,
    surroundTheme,
    title,
    theme,
  ]);
  const onReset = () => {
    setEditorWidth(defaultSettings.editorWidth);
    setFontSize(defaultSettings.fontSize);
    setIsLineNumber(defaultSettings.isLineNumber);
    setLanguage(defaultSettings.language);
    setSurroundPadding(defaultSettings.surroundPadding);
    setSurroundTheme(defaultSettings.surroundTheme);
    setTheme(defaultSettings.theme);
    setTitle(defaultSettings.title);
  };
  return (
    <div className='flex items-center justify-end'>
      <Button variant={'outline'} disabled={isDefault} onClick={onReset}>
        Reset
      </Button>
    </div>
  );
};
