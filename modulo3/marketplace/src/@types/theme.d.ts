import { THEME } from "src/theme";

type CustomThemeType = typeof THEME;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType { }
}