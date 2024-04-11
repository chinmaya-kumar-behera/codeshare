import { useState } from "react";
import { createCodeService, deleteCodesService, getCodeService, getCodesService } from "../services/urlService";
import { useSelector, useDispatch } from "react-redux";
import { setCode, setEditor, setDisabled, setViewOnly, setCodeData} from "../redux/code/editorSlice";
import { setCodesHistory } from "../redux/code/codeHistorySlice";
import toast from 'react-hot-toast';
import useDebounce from "../hooks/useDebounce";

const CodeHandler = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.user);
  const codes = useSelector((state) => state.codeHistory.codesShares);

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
            showViewOnly();
          }
        } else {
          // dispatch(setDisabled(true));
        }
      } else {
        dispatch(setDisabled(false));
      }
    }
  }

    const showViewOnly = useDebounce(() => {
      toast.success("You are in 'vieweonly' mode", {
        icon: "",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }, 4000);

  // create code
  const createCodeHandler = (data) => {
    return createCodeService({ ...data, user: authData?._id });
  };

  const getCodesHandler = async(data) => {
    const result = await getCodesService(data);
    console.log(result.data.data);
    dispatch(setCodesHistory(result.data.data));
  }


    const deleteCodesHandler = async (data) => {
      const result = await deleteCodesService(data);
      console.log(result.data.data);
      toast.success('Deleted successfully!')
      const newArr = codes.filter((el) => el._id !== result.data.data._id);
      dispatch(setCodesHistory(newArr));
    };

  return {
    updateEditor,
    getCodeHandler,
    createCodeHandler,
    getCodesHandler,
    deleteCodesHandler,
  };
};

export default CodeHandler;
