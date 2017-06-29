import React from "react";
import { config, dots } from "./config";
import Svg from "./Svg";
import withSizeConstraints from "../lib/withSizeConstraints";

const AnimatedGraphQL = ({ animated }) => (
  <Svg animated={animated} {...config} data={dots} />
);

export default withSizeConstraints(AnimatedGraphQL);
