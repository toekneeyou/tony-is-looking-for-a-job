export const classNames = (
  classStringOrObject: string | { [className: string]: boolean },
  classObject?: { [className: string]: boolean }
) => {
  let classNames: string[] = [];
  if (typeof classStringOrObject == "string") {
    classStringOrObject
      .trim()
      .split(" ")
      .forEach((c) => {
        classNames.push(c.trim());
      });
  } else {
    for (let string in classStringOrObject) {
      if (classStringOrObject[string]) {
        classNames.push(string);
      }
    }
  }
  if (classObject) {
    for (let string in classObject) {
      if (classObject[string]) {
        classNames.push(string);
      }
    }
  }
  return classNames.join(" ");
};
