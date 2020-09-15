export const validateEmail = () => {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return console.log('valid');
  }
  // alert("You have entered an invalid email address!")
  return console.log('NO valid');
};
