export const validateEmail = (value: string): boolean => {
  const pattern = /^([0-9a-zA-Z]([-.+\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;
  if (!pattern.test(value)) {
    return false;
  }
  return true;
};

export const validatePassword = (value: string): boolean => {
  const pattern = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;
  if (!pattern.test(value)) {
    return false;
  }
  return true;
};

export const validateMobile = (value: string): boolean => {
  const pattern = /^([0|\+[0-9]{1,5})?([0-9]{10})$/;
  if (!pattern.test(value)) {
    return false;
  }
  return true;
};

export const isRequired = (value: string): boolean => {
  if (!value.trim() || !value) {
    return false;
  }
  return true;
};
