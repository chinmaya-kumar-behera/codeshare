import { useNavigate } from "react-router-dom";

const NavigationHandler = () => {
  const navigate = useNavigate();

  const generateRandomString = () => {
    const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < 9; i++) {
      let ind = Math.floor(Math.random() * string.length);
      result += string.charAt(ind);
    }
    return result;
  };

  const navigateToNewUrl = () => {
    const uniqueString = generateRandomString();
    navigate(`/${uniqueString}`);
  };

  const navigateToCodes = () => {
    navigate('/codes');
  }

  return { navigateToNewUrl, generateRandomString, navigateToCodes };
};

export default NavigationHandler;
