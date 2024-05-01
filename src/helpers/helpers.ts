export const combineClasses = (classes: (string | undefined | null)[]) => {
  return classes.filter((c) => c !== null).join(" ");
};

export const genClassNames = (classes: { [className: string]: boolean }) => {
  return Object.entries(classes)
    .filter(([_, b]) => b)
    .map(([c, _]) => c)
    .join(" ");
};
