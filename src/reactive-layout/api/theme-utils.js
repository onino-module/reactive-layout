
export const isPc = (arg1, arg2) => ({ theme }) => (
  theme.device === "pc" ?
    arg1 :
    arg2
)

export const isPrim = (arg1, arg2) => ({ theme, primary }) => (
  primary ?
    theme[arg1] :
    theme[arg2]
)

export const getTheme = (key) => ({ theme }) => theme[key]


export const getTextColor = ({theme, primary, secondary, tertiary}) => {
  if(primary) return theme.text1
  if(secondary) return theme.text2
  if(tertiary) return theme.text3
  return theme.text
}

export const getBgColor = ({theme, primary, secondary, tertiary}) => {
  if(primary) return theme.bg4
  if(secondary) return theme.bg2
  if(tertiary) return theme.bg3
  return theme.bg
}

