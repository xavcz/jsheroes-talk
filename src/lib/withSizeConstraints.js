import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sizer = styled.div`
  width: ${props => props.size || "30vw"};
  height: auto;
`;

export default Component => props => (
  <Wrapper><Sizer size={props.size}><Component {...props} /></Sizer></Wrapper>
);
