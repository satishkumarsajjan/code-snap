import { EditorWidthSettings } from './EditorWidthSettings';
import { FontSizeSettings } from './FontSizeSettings';

import { LanguageSettings } from './LanguageSettings';
import { LineNumbers } from './LineNumbers';
import { SurroundPaddingSettings } from './SurroundPaddingSettings';

import { SurroundThemeSettings } from './SurroundThemeSetting';
import { ThemeSettings } from './ThemeSetting';
import { TitleSettings } from './TitleSettings';

export const Settings = () => {
  return (
    <div className='flex items-center justify-center h-full '>
      <div className='flex flex-col gap-5 overflow-auto h-full'>
        <ThemeSettings />
        <LanguageSettings />
        <FontSizeSettings />
        <LineNumbers />
        <SurroundThemeSettings />
        <SurroundPaddingSettings />
        <EditorWidthSettings />
        <TitleSettings />
      </div>
    </div>
  );
};
