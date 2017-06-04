import React, { Component } from "react";
import { TweenLite, TimelineMax } from "gsap";
import withSizeConstraints from "../lib/withSizeConstraints";
export { data, config } from "./config";

class GraphQL extends Component {
  componentDidMount() {
    TweenLite.set(this.main, {
      transformOrigin: "50% 50%",
      transform: "scale(2)"
    });

    const timeline = new TimelineMax({ repeat: -1, delay: 1 });

    timeline.add(
      TweenLite.to(this.circle, 1, {
        rotation: "360_short",
        transformOrigin: "50% 50%",
        ease: "Circ.easeOut"
      })
    );
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 200 200">
        <g ref={(g) => this.main = g}>
          <path
            fill="#22A699"
            d="M9.53 39.316H-9.066l-26.85-69.683h16.82l4.39 11.805h25.37L6.068-5.502h-16.703L.232 24.48l19.33-54.847H36.38z"
          />
          <path
            ref={(c) => this.circle = c}
            fill="#22A699"
            d="M73.877 20.682c-.045.238-.11.467-.196.688-.02.076-.09.22-.09.22-.608 1.316-1.937 2.233-3.483 2.233-2.118 0-3.835-1.717-3.835-3.835 0-.43.074-.843.205-1.23l-.01-.003C68.157 12.728 69.033 6.432 69.033 0c0-18.44-7.18-35.775-20.22-48.814C35.776-61.854 18.44-69.034 0-69.034s-35.776 7.18-48.814 20.22C-61.854-35.774-69.034-18.44-69.034 0s7.18 35.775 20.22 48.814C-35.776 61.854-18.44 69.034 0 69.034c16.466 0 32.048-5.73 44.48-16.24-.42-1.064-.652-2.22-.652-3.433 0-5.177 4.198-9.374 9.375-9.374 5.178 0 9.376 4.197 9.376 9.375s-4.2 9.376-9.377 9.376c-1.13 0-2.212-.2-3.216-.565C36.562 69.72 19.1 76.706 0 76.706c-42.363 0-76.704-34.342-76.704-76.705S-42.364-76.705 0-76.705c42.362 0 76.704 34.342 76.704 76.705 0 7.166-.99 14.102-2.827 20.682z"
          />
        </g>
      </svg>
    );
  }
}

export default withSizeConstraints(GraphQL);
