export const classNames = (
  ...args: Array<string | string[] | { [className: string]: boolean }>
) => {
  let classNames: string[] = [];
  args.forEach((c) => {
    if (typeof c === "string") {
      classNames.push(c.trim());
    } else if (Array.isArray(c)) {
      classNames = [...classNames, ...c];
    } else if (typeof c === "object") {
      for (let string in c) {
        if (c[string]) {
          classNames.push(string.trim());
        }
      }
    }
  });

  return classNames.join(" ");
};
