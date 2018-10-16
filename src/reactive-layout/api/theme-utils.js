export const isPc = (arg1, arg2) => ({ theme }) =>
  theme.device === "pc" ? arg1 : arg2;

export const isPrim = (arg1, arg2) => ({ theme, primary }) =>
  primary ? theme[arg1] : theme[arg2];

export const getTheme = key => ({ theme }) => theme[key];

export const getTextColor = ({ theme, primary, secondary, tertiary }) => {
  if (primary) return theme.colors.text1;
  if (secondary) return theme.colors.text2;
  if (tertiary) return theme.colors.text3;
  return theme.text;
};

export const getBgColor = ({ theme, primary, secondary, tertiary }) => {
  if (primary) return theme.colors.bg4;
  if (secondary) return theme.colors.bg2;
  if (tertiary) return theme.colors.bg3;
  return theme.colors.bg;
};
