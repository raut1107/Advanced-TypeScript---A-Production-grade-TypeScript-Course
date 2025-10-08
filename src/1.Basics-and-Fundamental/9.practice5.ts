
type themeValue = "light" | "dark";
export function applyTheme(theme: themeValue): void {
  // Implementation details here...
}

// ✅ Valid usage:
applyTheme("light");
applyTheme("dark");

// ❌ Invalid usage:
applyTheme("blue");
applyTheme(1);
