export const isEmail = (value) => {
  return value.includes("@");
};

export const isPassword = (value) => {
  return value.length >= 8;
};

const validator = {
  isEmail,
  isPassword,
};

export { validator };
