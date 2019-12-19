import React from "react";
import styled from "@emotion/styled";

export default ({ color, size }) => (
  <Svg viewBox="0 0 24 24" fill={color || "currentColor"} size={size}>
    <path
      d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z"
      opacity=".3"
    ></path>
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
  </Svg>
);

const Svg = styled.svg`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  flex-shrink: 0;
  flex-growth: 0;
`;
