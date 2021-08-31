const checkPassword = password => {
  if (password.length < 10) return false;
  
  let containsUpper = false;
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) === password.charAt(i).toUpperCase()) {
      containsUpper = true;
      break;
    }
  }
  if (!containsUpper) return false;

  let containsLower = false;
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) === password.charAt(i).toLowerCase()) {
      containsLower = true;
      break;
    }
  }
  if (!containsLower) return false;

  if (!/\d/.test(password)) return false;

  const format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if (!format.test(password)) return false;

  return true;
};

export default checkPassword;