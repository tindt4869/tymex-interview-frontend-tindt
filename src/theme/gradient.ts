export const gradient: Record<string, string> = {
  "1": `linear-gradient(90deg, #DD5AFE, #6366F1)`,
  "2": `linear-gradient(90deg, #49DD81, #22B4C6)`,
  "3": `linear-gradient(90deg, #43A6F6, #5868F3)`,
  "4": `linear-gradient(90deg, #FE955A, #F1DA63)`,
  "5": `linear-gradient(90deg, #FE5A5A, #F163D2)`,
};

export function getRandomBgColor() {
  const randomNumber = Math.floor(Math.random() * 4 + 1);
  return gradient[randomNumber.toString()];
}
