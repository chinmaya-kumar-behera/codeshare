import React from 'react'
import { RxCross1 } from 'react-icons/rx';

const Settings = ({ toggle, setEditConfig, editorConfig }) => {
  const Languages = [
    { name: "JavaScript", value: "javascript" },
    { name: "Python", value: "python" },
  ];

  const fontSizes = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 28, 32, 42,
  ];

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    setEditConfig((prev) => ({ ...prev, [name]: value }));
  };
  
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
            onChange={onChangeHandler}
            value={editorConfig.language}
            className="bg-gray-700 border border-gray-300 text-gray-300 text-sm rounded-lg block w-full p-2.5"
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
          >
            {fontSizes.map((el) => (
              <option
                className={`${
                  editorConfig.fontSize == el && "text-[#ec3360]"
                }`}
                key={el}
                value={el}
              >
                {el}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings