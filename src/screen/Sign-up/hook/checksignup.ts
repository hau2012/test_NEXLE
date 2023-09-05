import {useState} from 'react';

var specialcharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
var lowercaseletters = /(?=.*[a-z])/;
var uppercaseletters = /(?=.*[A-Z])/;
var numbercase = /(?=.*[0-9])/;

export const checksignup = () => {
  const [errEmail, seterrEmail] = useState(false);
  const [errPass, seterrPass] = useState('');
  const [textLevelPass, settextLevelPass] = useState('Too short');

  const [levelPass, setlevelPass] = useState(1);

  const checkEmail = (email): any => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      seterrEmail(true);
    } else {
      seterrEmail(false);
    }
    return errEmail;
  };

  const checkpass = (pass): string => {
    console.log('pass', pass);
    if (pass.length < 6 || pass.length > 18) {
      seterrPass('mat khau tu 6 den 18 ki tu ');
      console.log('mat khau tu 6 den 18 ki tu ');
      settextLevelPass('Too short');
      setlevelPass(0);
    } else {
      if (
        String(pass).match(lowercaseletters) &&
        String(pass).match(uppercaseletters) &&
        String(pass).match(numbercase) &&
        String(pass).match(specialcharacters)
      ) {
        setlevelPass(4);
        console.log('passs level 4');
        settextLevelPass('Strong');
      } else if (
        (String(pass).match(lowercaseletters) &&
          String(pass).match(uppercaseletters) &&
          String(pass).match(numbercase)) ||
        (String(pass).match(lowercaseletters) &&
          String(pass).match(uppercaseletters) &&
          String(pass).match(specialcharacters)) ||
        (String(pass).match(lowercaseletters) &&
          String(pass).match(numbercase) &&
          String(pass).match(specialcharacters)) ||
        (String(pass).match(uppercaseletters) &&
          String(pass).match(numbercase) &&
          String(pass).match(specialcharacters))
      ) {
        setlevelPass(3);
        settextLevelPass('Good');
        console.log('passs level 3');
        console.log('passs level 3');
      } else if (
        (String(pass).match(lowercaseletters) &&
          String(pass).match(uppercaseletters)) ||
        (String(pass).match(lowercaseletters) &&
          String(pass).match(numbercase)) ||
        (String(pass).match(lowercaseletters) &&
          String(pass).match(specialcharacters)) ||
        (String(pass).match(uppercaseletters) &&
          String(pass).match(numbercase)) ||
        (String(pass).match(uppercaseletters) &&
          String(pass).match(specialcharacters)) ||
        (String(pass).match(uppercaseletters) &&
          String(pass).match(specialcharacters))
      ) {
        setlevelPass(2);
        settextLevelPass('Fair');

        console.log('passs level 2');
      } else {
        setlevelPass(1);
        console.log('passs level 1');
        settextLevelPass('Week');
      }
      console.log('pass oke');
      seterrPass('');
    }
    return errPass;
  };

  return {
    checkEmail,
    checkpass,
    errEmail,
    errPass,
    levelPass,
    textLevelPass,
  };
};
