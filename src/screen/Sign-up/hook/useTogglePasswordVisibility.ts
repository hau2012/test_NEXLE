import { useState } from 'react';

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('show_ic');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'show_ic') {
      setRightIcon('hide_ic');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'hide_ic') {
      setRightIcon('show_ic');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
