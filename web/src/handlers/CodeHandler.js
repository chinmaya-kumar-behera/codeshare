import { useState } from "react";
import { createCodeService, getCodeService } from "../services/urlService";
import { useSelector, useDispatch } from "react-redux";
import { setCode, setEditor, setDisabled, setViewOnly, setCodeData} from "../redux/code/editorSlice";

const CodeHandler = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.user);
  const code = useSelector((state) => state.editor.code);

  const getCodeHandler = ({ id, userId }) => {
    try {
      return getCodeService({ id, userId })
        .then((data) => {
          updateEditor(data.data.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };




  function updateEditor(data) {
    if (data) {
      console.log(data);
      const { code, setting, viewOnly, user, ...rest } = data;
      dispatch(setCode(code));
      dispatch(setEditor({ ...setting }));
      dispatch(setViewOnly(viewOnly));
      dispatch(setCodeData({ ...rest, user }));
      console.log("viewonly is ", viewOnly)
      console.log(authData);
      if (viewOnly) {
        console.log(user, authData);
        if (user && authData?._id) {
          if (user === authData._id) {
            dispatch(setDisabled(false));
          } else {
            dispatch(setDisabled(true));
          }
        } else {
          // dispatch(setDisabled(true));
        }
      } else {
        dispatch(setDisabled(false));
      }
    }
  }

  // create code
  const createCodeHandler = (data) => {
    return createCodeService({ ...data, user: authData?._id });
  };

  return {
    updateEditor,
    getCodeHandler,
    createCodeHandler,
  };
};

export default CodeHandler;
