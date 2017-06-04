import React, { Component } from "react";
import { TweenLite, TimelineMax } from "gsap";
export { data, config } from "./config";

const scaleTween = (size) => (element) =>
  TweenLite.to(element, 0.3, {
    scale: size,
    transformOrigin: "50% 50%",
    ease: "Circ.easeOut"
  });

class GraphQL extends Component {
  componentDidMount() {
    TweenLite.set(this.main, { scale: 0.8, transformOrigin: "50% 50%" });

    const timeline = new TimelineMax({ repeat: -1, delay: 1 });

    const scaleUp = scaleTween(1.2);
    const scaleDown = scaleTween(1);

    this.props.data.reduce(
      (tl, dot, index) =>
        tl
          .add(scaleUp(this[`dot-${index}`]))
          .add(scaleDown(this[`dot-${index}`])),
      timeline
    );
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={this.props.viewBox}
        fill={this.props.globalFill}
      >
        <g ref={(g) => this.main = g}>
          {/* lines */}
          {this.props.renderStaticElements()}
          {/* animated dots */}
          {this.props.renderDynamicElements(this)}
        </g>
      </svg>
    );
  }
}

export default GraphQL;
