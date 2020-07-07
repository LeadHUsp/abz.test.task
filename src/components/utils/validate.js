export const minLength = (e) => {
  let length = e.target.value.length;
  if (length <= 2 || length > 60) {
    return false;
  } else return true;
};
export const emailValidate = (e) => {
  let mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  if (e.target.value.match(mailformat)) {
    return true;
  } else return false;
};
export const phoneNumber = (e) => {
  let number = /^\+380[0-9]{9}$/;
  if (e.target.value.match(number)) {
    return true;
  } else return false;
};
export const emptyField = (e) => {
  let length = e.target.value.length;
  if (length === 0) {
    return false;
  } else return true;
};
