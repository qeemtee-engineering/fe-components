const validateEmail = (value: string): boolean => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(value)) {
    return false;
  }
  return true;
};

const validatePassword = (value: string): boolean => {
  const pattern = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;
  if (!pattern.test(value)) {
    return false;
  }
  return true;
};

const validateMobile = (value: string): boolean => {
  const pattern = /^([0|\+[0-9]{1,5})?([0-9]{10})$/;
  if (!pattern.test(value)) {
    return false;
  }
  return true;
};

const isRequired = (value: string): boolean => {
  if (!value.trim() || !value) {
    return false;
  }
  return true;
};

export default {
  validateEmail,
  validatePassword,
  validateMobile,
  isRequired,
};
