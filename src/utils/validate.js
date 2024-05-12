export const isEmpty = (value) => {
  return value.trim().length === 0;
};

export const isValidEmail = (email) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};
