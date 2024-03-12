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
    "default": "all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms",
  }
}