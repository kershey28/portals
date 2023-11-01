export const titleToPath = (title: string) =>
  title.replace(/'/g, "").replace(/ /g, "-").toLowerCase();
