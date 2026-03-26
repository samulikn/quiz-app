const icons = import.meta.glob("../assets/images/icon-*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const bgColors: Record<string, string> = {
  HTML: "bg-orange-50",
  CSS: "bg-green-100",
  JavaScript: "bg-blue-50",
  Accessibility: "bg-purple-100",
};

const icon = (subject: string) => {
  return subject === "JavaScript"
    ? icons["../assets/images/icon-js.svg"]
    : icons[`../assets/images/icon-${subject.toLowerCase()}.svg`];
};

const bgColor = (subject: string) => {
  return bgColors[subject] ?? "bg-grey-50";
};

export { icon, bgColor };
