import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@modulz/radix";

function Sidebar() {
  return (
    <Box
      width={["100%", 200, 240]}
      borderRight={[0, "1px solid"]}
      borderColor={["grays.2", "grays.2"]}
    >
      <Box
        p={5}
        height={64}
        borderBottom={[0, "1px solid"]}
        borderColor={["grays.2", "grays.2"]}
      >
        <Link to="/">Hamerlin</Link>
      </Box>
      <Box p={3} px={4}>
        <Link to="/clients">Clientes</Link>
      </Box>
    </Box>
  );
}

export default Sidebar;
