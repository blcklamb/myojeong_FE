export const isValidName = (name: string) =>
  name.length > 0 && name.length <= 6;

export const isValidWish = (content: string) =>
  content.length > 0 && content.length <= 90;
