import { Box } from "@chakra-ui/react";
import React from "react";

function MainLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Box>
      <main>{children}</main>
    </Box>
  );
}

export default MainLayout;
