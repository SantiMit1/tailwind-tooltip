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
  }
}