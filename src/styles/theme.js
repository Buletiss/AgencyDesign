import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: "red.300"
  },
  styles: {
    global: {
      body: {
        bg: "brand",
      },
    },
  },
});

export default theme;
