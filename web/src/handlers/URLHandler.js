import { createCodeService, getCodeService } from '../services/urlService';
import { useSelector } from "react-redux";

const URLHandler = () => {
  const user = useSelector((state) => state.auth.user);

  const getCodeHandler = ({ id, userId }) => {
    try {
      return getCodeService({ id, userId });
    } catch (err) {
      console.log(err);
    }
  }

    const createCodeHandler = (data) => {
      return createCodeService({ ...data, userId: user?._id });
    };
  return { getCodeHandler, createCodeHandler };
}

export default URLHandler