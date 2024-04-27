export const combineClasses = (classes: (string | undefined | null)[]) => {
  return classes.filter((c) => c !== null).join(" ");
};
