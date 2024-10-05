import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <main>{children}</main>
    </NextThemesProvider>
  );
}
