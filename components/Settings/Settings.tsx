import { FontSize } from './FontSize';
import { LanguageSettings } from './LanguageSettings';
import { ThemeSettings } from './ThemeSetting';

export const Settings = () => {
  return (
    <div>
      <ThemeSettings />
      <LanguageSettings />
      <FontSize />
    </div>
  );
};
