import { useMediaQuery } from "@mui/material";

export const IsDesktop = () => {
  const isDesktop = useMediaQuery(`(min-width: 950px)`);
  return isDesktop;
};
