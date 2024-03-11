import createPlugin from "tailwindcss/plugin";
import theme from "./theme";

/** @type {import("tailwindcss/types/config").PluginCreator} */
const pluginCreator = api => {
  // const { theme, addUtilities, matchUtilities } = api;
  const { addUtilities } = api;

  // const dynamicUtils = {
  //   "tooltip-t-bg": { css: "background-color", values: theme("bacgroundColor") },
  //   "tooltip-t-text": { css: "color", values: theme("color") }
  // }

  // Object.entries(dynamicUtils).forEach(([name, { css, values }]) => {
  //   matchUtilities({
  //     [name]: value => ({
  //       [css]: value
  //     })
  //   }, {
  //     values
  //   })
  // })

  addUtilities({
    ".tooltip-wrapper": {
      "margin-top": "10px",
      "width": "fit-content"
    },
    ".tooltip-t": {
      "position": "relative",
      "&::before": {
        "position": "absolute",
        "content": " ",
        "width": "15px",
        "height": "15px",
        "z-index": "9999",
        "opacity": 0,
        "transition": "all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms",
        "pointer-events": "none",
        "top": 0,
        "left": "50%",
        "transform": "translate(-50%, 0) rotate(45deg)",
      },
      "&::after": {
        "content": "attr(data-tooltip-text)",
        "white-space": "nowrap",
        "border-radius": "5px",
        "position": "absolute",
        "text-align": "center",
        "z-index": "9999",
        "opacity": 0,
        "transition": "all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms",
        "pointer-events": "none",
        "height": "30px",
        "display": "flex",
        "align-items": "center",
        "padding": "0 0.55px",
        "top": 0,
        "left": "50%",
        "transform": "translate(-50%, 0)",
      },
      "&:hover::before, &:hover::after": {
        "opacity": "1",
      },
      "&:hover::before": {
        "transform": "translate(-50%, calc(-100% - 5px)) rotate(45deg)",
      },
      "&:hover::after": {
        "transform": "translate(-50%, calc(-100% - 10px))",
      },
    },

    ".tooltip-l": {
      "position": "relative",
      "&::before": {
        "position": "absolute",
        "content": " ",
        "width": "15px",
        "height": "15px",
        "z-index": "9999",
        "opacity": 0,
        "transition": "all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms",
        "pointer-events": "none",
        "top": "25%",
        "left": 0,
        "transform": "translate(0, 0%) rotate(45deg)",
      },
      "&::after": {
        "content": "attr(data-tooltip-text)",
        "white-space": "nowrap",
        "border-radius": "5px",
        "position": "absolute",
        "text-align": "center",
        "z-index": "9999",
        "opacity": 0,
        "transition": "all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms",
        "pointer-events": "none",
        "height": "30px",
        "display": "flex",
        "align-items": "center",
        "padding": "0 0.55px",
        "top": 0,
        "left": 0,
      },
      "&:hover::before, &:hover::after": {
        "opacity": "1",
      },
      "&:hover::before": {
        "transform": "translate(calc(-100% - 5px)) rotate(45deg)",
      },
      "&:hover::after": {
        "transform": "translate(calc(-100% - 10px))",
      },
    },

    ".tooltip-r": {
      "position": "relative",
      "&::before": {
        "position": "absolute",
        "content": " ",
        "width": "15px",
        "height": "15px",
        "z-index": "9999",
        "opacity": 0,
        "transition": "all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms",
        "pointer-events": "none",
        "top": "25%",
        "right": 0,
        "transform": "translate(-50%, 0) rotate(45deg)",
      },
      "&::after": {
        "content": "attr(data-tooltip-text)",
        "white-space": "nowrap",
        "border-radius": "5px",
        "position": "absolute",
        "text-align": "center",
        "z-index": "9999",
        "opacity": 0,
        "transition": "all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms",
        "pointer-events": "none",
        "height": "30px",
        "display": "flex",
        "align-items": "center",
        "padding": "0 0.55px",
        "top": 0,
        "right": 0,
      },
      "&:hover::before, &:hover::after": {
        "opacity": "1",
      },
      "&:hover::before": {
        "transform": "translate(calc(100% + 5px)) rotate(45deg)",
      },
      "&:hover::after": {
        "transform": "translate(calc(100% + 10px))",
      },
    },

    ".tooltip-b": {
      "position": "relative",
      "&::before": {
        "position": "absolute",
        "content": " ",
        "width": "15px",
        "height": "15px",
        "z-index": "9999",
        "opacity": 0,
        "transition": "all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms",
        "pointer-events": "none",
        "bottom": 0,
        "left": "50%",
        "transform": "translate(-50%, 0) rotate(45deg)",
      },
      "&::after": {
        "content": "attr(data-tooltip-text)",
        "white-space": "nowrap",
        "border-radius": "5px",
        "position": "absolute",
        "text-align": "center",
        "z-index": "9999",
        "opacity": 0,
        "transition": "all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms",
        "pointer-events": "none",
        "height": "30px",
        "display": "flex",
        "align-items": "center",
        "padding": "0 0.55px",
        "bottom": 0,
        "left": "50%",
        "transform": "translate(-50%, 0)",
      },
      "&:hover::before, &:hover::after": {
        "opacity": "1",
      },
      "&:hover::before": {
        "transform": "translate(-50%, calc(100% + 5px)) rotate(45deg)",
      },
      "&:hover::after": {
        "transform": "translate(-50%, calc(100% + 10px))",
      },
    }
  });
}

/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig);