export const SLUG_TYPE = {
  CATEGORY: "CATEGORY",
  BLOG: "BLOG",
  SEARCH: "SEARCH",
};

export const randomColor = () => {
  const COLORS_BUTTON_RANDOM = ["orange", "green", "blue", "grey"];
  return COLORS_BUTTON_RANDOM[
    Math.floor(Math.random() * COLORS_BUTTON_RANDOM.length)
  ];
};
