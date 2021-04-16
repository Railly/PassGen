export const values = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  nuwbers: "1234567890",
  symbols: "!@#$%^&*",
};

export const getCombination = (feature) => {
  let result = "";
  for (const property in feature) {
    if (feature[property]) result += values[property];
  }
  return result;
};

export const getPassword = (length, features) => {
  let result = [];
  const characters = getCombination(features);
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
};
