import bcrypt from "bcrypt";

export const usernameIsValid = (username) => {
  return /^[0-9a-zA-Z_.-]+$/.test(username);
};

export const isSamePassword = (unHashedPassword, hashedPassword) => {
  //   return bcrypt.compare(unHashedPassword, hashedPassword).then((result) => {
  //     return result;
  //   });
  return bcrypt.compare(unHashedPassword, hashedPassword, function (err, res) {
    if (err) {
      return false;
    }
    if (res) {
      return true;
    } else {
      return false;
    }
  });
};
