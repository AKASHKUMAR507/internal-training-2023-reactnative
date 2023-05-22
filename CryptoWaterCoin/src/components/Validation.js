const validationEmail = email => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

const validationPassword = password => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return regex.test(password);
};


const validationFname = fname =>{
  const reg = /([A-Z])\w+/g;
  return reg.test(fname);
}

const validationLname = lname =>{
  const reg = /([A-Za-z])\w+/g;
  return reg.test(lname);
}

const validationPhone = phone =>{
  const reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
  return reg.test(phone);
}




export {validationEmail, validationPassword, validationFname, validationLname, validationPhone};
