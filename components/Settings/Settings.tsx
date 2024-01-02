import { EditorWidthSettings } from './EditorWidthSettings';
import { FontSize } from './FontSize';
import { LanguageSettings } from './LanguageSettings';
import { LineNumbers } from './LineNumbers';
import { SurroundPadding } from './SurroundPadding';
import { SurroundThemeSettings } from './SurroundThemeSetting';
import { ThemeSettings } from './ThemeSetting';
import { TitleSettings } from './TitleSettings';

export const Settings = () => {
  return (
    <div className='flex flex-col gap-5'>
      <ThemeSettings />
      <LanguageSettings />
      <FontSize />
      <LineNumbers />
      <SurroundThemeSettings />
      <SurroundPadding />
      <EditorWidthSettings />
      <TitleSettings />
    </div>
  );
};
