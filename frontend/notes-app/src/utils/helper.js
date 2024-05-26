export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+$/;
  return regex.test(email);
};
