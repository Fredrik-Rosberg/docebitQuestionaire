///Kollar först om det finns lösen ord. Kollar sedan om det är mellan 8-50 tecken.
///Kollar om det finns stor bokstav, liten bokstav, nummer och specialtecken.

export const passwordValidator = (password) => {
  if (!password) {
    return "Password is required";
  } else if (password.length < 8 || password.length > 50) {
    return "Password must have a minimum 8 characters and max 50 characters";
  } else if (
    !new RegExp(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/
    ).test(password)
  ) {
    return "Password must have at least one uppercase, one lowercase, one numeric and one special character";
  }

  return "";
};

///Kollar om det finns email inskrivet, Kollar om den innehåller @ tecken.

export const emailValidator = (email) => {
  if (!email) {
    return "Email is required";
  } else if (!new RegExp(/(?=.*[@])/).test(email)) {
    return "Must be a valid email";
  }

  return "";
};
