import { EditorWidthSettings } from './EditorWidthSettings';
import { FontSizeSettings } from './FontSizeSettings';

import { LanguageSettings } from './LanguageSettings';
import { LineNumbers } from './LineNumbers';
import { Reset } from './Reset';
import { Share } from './Share';
import { SurroundPaddingSettings } from './SurroundPaddingSettings';

import { SurroundThemeSettings } from './SurroundThemeSetting';
import { ThemeSettings } from './ThemeSetting';
import { TitleSettings } from './TitleSettings';

export const Settings = () => {
  return (
    <div className='flex items-center justify-center h-full '>
      <div className='flex flex-col gap-5 overflow-auto h-full overscroll-auto'>
        <Reset />
        <ThemeSettings />
        <LanguageSettings />
        <FontSizeSettings />
        <LineNumbers />
        <SurroundThemeSettings />
        <SurroundPaddingSettings />
        <EditorWidthSettings />
        <TitleSettings />
        <Share />
      </div>
    </div>
  );
};
