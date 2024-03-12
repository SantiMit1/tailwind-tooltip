import colors from 'tailwindcss/colors';

function flattenColors(nestedColors) {
  const flatColors = {};

  Object.entries(nestedColors).forEach(([color, values]) => {
    if (typeof values === 'string') {
      flatColors[color] = values;
    } else {
      Object.entries(values).forEach(([key, value]) => {
        flatColors[`${color}-${key}`] = value;
      });
    }
  });

  return flatColors;
}

const flatColors = flattenColors(colors);

export default {
  backgroundColor: {
    ...flatColors,
  },
  color: {
    ...flatColors,
  },
  transition: {
    "default": "opacity 300ms",
  },
  fontSize: {
    "sm": "0.875rem",
    "base": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
  }
}