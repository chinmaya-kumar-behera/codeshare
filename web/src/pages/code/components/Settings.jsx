import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setEditor, setViewOnly } from '../../../redux/code/editorSlice';
import CodeHandler from '../../../handlers/CodeHandler';
import { socket } from '../../../config/socket';

const Settings = ({ toggle, id  }) => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.user);
  const codeData = useSelector((state) => state.editor.codeData);
  const editor = useSelector((state) => state.editor.editor);
  const isDisabled = useSelector((state) => state.editor.isDisabled);
  const viewOnly = useSelector((state) => state.editor.viewOnly);
  const code = useSelector((state) => state.editor.code);
  const user = useSelector((state) => state.auth.user);

  const { createCodeHandler } = CodeHandler();


  const Languages = [
    { name: "JavaScript", value: "javascript" },
    { name: "Python", value: "python" },
  ];

  const fontSizes = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 28, 32, 42,
  ];

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    dispatch(setEditor({ [name]: value }));
  };

  const onCheckChange = (event) => {
    if (user?._id) {
      const { checked } = event.target;
      dispatch(setViewOnly(checked));

      // createCodeHandler({ id, code, setting:editor, viewOnly })
      //   .then((res) => {
      //     console.log(res)
      //     socket.emit("codeShare", id, {
      //       setting: editor,
      //       code,
      //       viewOnly,
      //       ...codeData,
      //     });
      //   })
      //   .catch((err) => console.log(err));

      if (checked) toast.success("Switched to viewonly mode !");

    } else {
      toast.error('Please log in to use this feature !')
    }
  }

    const checkEditorDisabled = () => {
      if (viewOnly) {
        if (codeData.user == authData?._id) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
  };

  const dataHint = () => {
    if (authData?._id) {
      if (codeData.user === authData?._id && !viewOnly) {
        return "Enable view only mode!";
      } else return "You cannot change!";
    } else {
      return "login to access this feature!"
    }
  }


  const renderViewOnlyButtonComponent = () => {
    return (
      <div className="form-field">
        <label>"View only" mode</label>
        <label
          className="switch hint--top"
          data-hint={dataHint()}
        >
          <input
            type="checkbox"
            className="switch-input disabled:cursor-no-drop"
            onChange={onCheckChange}
            disabled={checkEditorDisabled()}
            checked={viewOnly}
          />
          <span className="switch-label" data-on="On" data-off="Off"></span>
          <span className="switch-handle"></span>
        </label>
        <p className="note">
          Turn on "view only" mode if you dont want others to edit the code
        </p>
      </div>
    );
  }
  
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Settings</h2>
        <button onClick={toggle}>
          <RxCross1 className="" />
        </button>
      </div>
      <div className="mt-5 space-y-5">
        <div className="">
          <label className="block mb-2 text-sm font-semibold text-gray-400">
            Select Language
          </label>
          <select
            name="language"
            hint={`${isDisabled && "Cannot change while redonly mode!"}`}
            onChange={onChangeHandler}
            value={editor.language}
            className="bg-gray-700 border border-gray-300 text-gray-300 text-sm rounded-lg block w-full p-2.5"
            disabled={isDisabled}
          >
            {Languages.map((el) => (
              <option
                className={`${
                  editor.language === el.value && "text-[#ec3360]"
                }`}
                key={el.value}
                value={el.value}
              >
                {el.name}
              </option>
            ))}
          </select>
        </div>

        <div className="">
          <label className="block mb-2 text-sm font-semibold text-gray-400">
            Select Font Size
          </label>
          <select
            name="fontSize"
            onChange={onChangeHandler}
            value={editor.fontSize}
            className="bg-gray-700 border border-gray-300 text-gray-300 text-sm rounded-lg block w-full p-2.5"
            disabled={isDisabled}
          >
            {fontSizes.map((el) => (
              <option
                className={`${editor.fontSize === el && "text-[#ec3360]"}`}
                key={el}
                value={el}
              >
                {el}
              </option>
            ))}
          </select>
        </div>

        {renderViewOnlyButtonComponent()}
      </div>
    </div>
  );
};

export default Settings
