export const classNames = (
  classOne: string | string[] | { [className: string]: boolean },
  classTwo?: string | string[] | { [className: string]: boolean },
  classThree?: string | string[] | { [className: string]: boolean }
) => {
  let classNames: string[] = [];
  [classOne, classTwo, classThree].forEach((c) => {
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
