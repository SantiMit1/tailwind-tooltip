import createPlugin from "tailwindcss/plugin";
import theme from "./theme";

/** @type {import("tailwindcss/types/config").PluginCreator} */
const pluginCreator = api => {
  const { addComponents, matchUtilities, theme } = api;

  const dynamicUtilities = {
    "tooltip-bg": {css: "background-color", values: theme("backgroundColor")},
    "tooltip-text": {css: "color", values: theme("color")},
    "tooltip-transition": {css: "transition", values: theme("transition")},
    "tooltip-size": {css: "font-size", values: theme("fontSize")},
  }

  Object.entries(dynamicUtilities).forEach(([utility, {css, values}]) => {
    matchUtilities(
      {
        [utility]: value => ({
          "&::after": {
            [css]: value,
          },
          "&::before": {
            [css]: value,
          }
        }),
      },
      {
        values
      }
    );
  })

  addComponents({
    ".tooltip-t": {
      "position": "relative",
      "&::before": {
        "position": "absolute",
        "content": "var(--tw-content)",
        "width": "15px",
        "height": "15px",
        "z-index": "9999",
        "opacity": 0,
        "pointer-events": "none",
        "top": 0,
        "left": "50%",
        "transform": "translate(-50%, calc(-100% - 5px)) rotate(45deg)",
        "visibility": "hidden"
      },
      "&::after": {
        "content": "attr(data-tooltip-text)",
        "white-space": "nowrap",
        "border-radius": "5px",
        "position": "absolute",
        "text-align": "center",
        "z-index": "9999",
        "opacity": 0,
        "pointer-events": "none",
        "height": "auto",
        "min-height": "35px",
        "display": "flex",
        "align-items": "center",
        "padding": "0 5px",
        "top": 0,
        "left": "50%",
        "transform": "translate(-50%, calc(-100% - 10px))",
        "visibility": "hidden"
      },
      "&:hover::before, &:hover::after": {
        "opacity": "1",
        "visibility": "visible"
      },
    },

    ".tooltip-l": {
      "position": "relative",
      "&::before": {
        "position": "absolute",
        "content": "var(--tw-content)",
        "width": "15px",
        "height": "15px",
        "z-index": "9999",
        "opacity": 0,
        "pointer-events": "none",
        "top": "25%",
        "left": 0,
        "transform": "translate(calc(-100% - 5px)) rotate(45deg)",
        "visibility": "hidden",
      },
      "&::after": {
        "content": "attr(data-tooltip-text)",
        "white-space": "nowrap",
        "border-radius": "5px",
        "position": "absolute",
        "text-align": "center",
        "z-index": "9999",
        "opacity": 0,
        "pointer-events": "none",
        "height": "auto",
        "min-height": "35px",
        "display": "flex",
        "align-items": "center",
        "padding": "0 5px",
        "top": 0,
        "left": 0,
        "transform": "translate(calc(-100% - 10px))",
        "visibility": "hidden",
      },
      "&:hover::before, &:hover::after": {
        "opacity": "1",
        "visibility": "visible"
      },
    },

    ".tooltip-r": {
      "position": "relative",
      "&::before": {
        "position": "absolute",
        "content": "var(--tw-content)",
        "width": "15px",
        "height": "15px",
        "z-index": "9999",
        "opacity": 0,
        "pointer-events": "none",
        "top": "25%",
        "right": 0,
        "transform": "translate(calc(100% + 5px)) rotate(45deg)",
        "visibility": "hidden"
      },
      "&::after": {
        "content": "attr(data-tooltip-text)",
        "white-space": "nowrap",
        "border-radius": "5px",
        "position": "absolute",
        "text-align": "center",
        "z-index": "9999",
        "opacity": 0,
        "pointer-events": "none",
        "height": "auto",
        "min-height": "35px",
        "display": "flex",
        "align-items": "center",
        "padding": "0 5px",
        "top": 0,
        "right": 0,
        "transform": "translate(calc(100% + 10px))",
        "visibility": "hidden"
      },
      "&:hover::before, &:hover::after": {
        "opacity": "1",
        "visibility": "visible"
      },
    },

    ".tooltip-b": {
      "position": "relative",
      "&::before": {
        "position": "absolute",
        "content": "var(--tw-content)",
        "width": "15px",
        "height": "15px",
        "z-index": "9999",
        "opacity": 0,
        "pointer-events": "none",
        "bottom": 0,
        "left": "50%",
        "transform": "translate(-50%, calc(100% + 5px)) rotate(45deg)",
        "visibility": "hidden"
      },
      "&::after": {
        "content": "attr(data-tooltip-text)",
        "white-space": "nowrap",
        "border-radius": "5px",
        "position": "absolute",
        "text-align": "center",
        "z-index": "9999",
        "opacity": 0,
        "pointer-events": "none",
        "height": "auto",
        "min-height": "35px",
        "display": "flex",
        "align-items": "center",
        "padding": "0 5px",
        "bottom": 0,
        "left": "50%",
        "transform": "translate(-50%, calc(100% + 10px))",
        "visibility": "hidden"
      },
      "&:hover::before, &:hover::after": {
        "opacity": "1",
        "visibility": "visible"
      },
    }
  });
}

/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig);