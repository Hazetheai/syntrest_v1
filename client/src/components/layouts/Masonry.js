import React from "react";
import styled from "@emotion/styled";
import { Flex, Box } from "@rebass/grid/emotion";

const Masonry = () => (
  <Flex>
    <Box width={1 / 2} px={4}>
      <img
        className="masonry-image"
        src="https://source.unsplash.com/400x300/?=keyboard"
        alt=""
        css={{
          objectFit: "cover",
          width: "100%",
          height: "100%"
        }}
      />
    </Box>
    <Box width={1 / 2} px={4}>
      <img
        className="masonry-image"
        src="https://source.unsplash.com/400x300/?=synth"
        alt=""
        css={{
          objectFit: "cover",
          width: "100%",
          height: "100%"
        }}
      />
    </Box>
  </Flex>
);

export default Masonry;
