import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDisabled } from '../redux/code/editorSlice';

const UseRenderViewOnlyButton = () => {
  const authData = useSelector((state) => state.auth.user);
  const codeData = useSelector((state) => state.editor.codeData);
  const isDisabled = useSelector((state) => state.editor.isDisabled);
    const viewOnly = useSelector((state) => state.editor.viewOnly);
    const dispatch = useDispatch();

    const [showButton, setShowButton] = useState(false);
    
    if (viewOnly) {
        if (authData?._id) {
        //   console.log("check ", authData?._id == codeData.user);
          if (authData?._id == codeData.user) {
             dispatch(setDisabled(false));
          } else {
            dispatch(setDisabled(true));
          }
        } else {
          dispatch(setDisabled(true));
        }
      }
    

  return true;
}

export default UseRenderViewOnlyButton