import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Settings = ({ toggle, setEditConfig, editorConfig }) => {

  const user = useSelector((state) => state.auth.user);
  const Languages = [
    { name: "JavaScript", value: "javascript" },
    { name: "Python", value: "python" },
  ];

  const fontSizes = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 28, 32, 42,
  ];

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setEditConfig((prev) => ({ ...prev, [name]: value }));
  };

  const onCheckChange = (event) => {
    if (user?._id) {
      const { checked } = event.target;
      setEditConfig((prev) => ({ ...prev, isEditable: checked }));
      if (checked) toast.success("Switched to view only mode !");
    } else {
      toast.error('Please log in to use this feature !')
    }
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
            hint={`${editorConfig.isEditable && 'Cannot change while redonly mode!'}`}
            onChange={onChangeHandler}
            value={editorConfig.language}
            className="bg-gray-700 border border-gray-300 text-gray-300 text-sm rounded-lg block w-full p-2.5"
            disabled={editorConfig.isEditable}
          >
            {Languages.map((el) => (
              <option
                className={`${
                  editorConfig.language == el.value && "text-[#ec3360]"
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
            value={editorConfig.fontSize}
            className="bg-gray-700 border border-gray-300 text-gray-300 text-sm rounded-lg block w-full p-2.5"
            disabled={editorConfig.isEditable}
          >
            {fontSizes.map((el) => (
              <option
                className={`${editorConfig.fontSize == el && "text-[#ec3360]"}`}
                key={el}
                value={el}
              >
                {el}
              </option>
            ))}
          </select>
        </div>
        <div class="form-field">
          <label for="view-only">"View only" mode</label>
          <label
            class="switch hint--top"
            data-hint="Sorry, only registered users can manage permissions."
          >
            <input
              type="checkbox"
              class="switch-input"
              onChange={onCheckChange}
              disabled={editorConfig.isEditable}
              checked={editorConfig.isEditable}
            />
            <span class="switch-label" data-on="On" data-off="Off"></span>
            <span class="switch-handle"></span>
          </label>
          <p class="note">
            Turn on "view only" mode if you dont want others to edit the code
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings