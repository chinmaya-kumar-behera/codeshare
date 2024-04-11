import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import CodeHandler from '../../handlers/CodeHandler';
import NavigationHandler from '../../handlers/NavigationHandler';

const Codes = () => {
  const user = useSelector((state) => state.auth.user);
  const { getCodesHandler, deleteCodesHandler } = CodeHandler();
  const { navigateToNewUrl } = NavigationHandler();

  const codes = useSelector((state) => state.codeHistory.codesShares);
  console.log(codes);

  useEffect(() => {
    if (user?._id) {
      getCodesHandler({ userId:user?._id });
    }
  }, [user?._id]);

  return (
    <div className="container">
      <h1>Your Codeshares</h1>
      <p className="alignright">
        <button
          className="btn-primary btn-sm"
          onClick={navigateToNewUrl}
        >
          New Codeshare
        </button>
      </p>
      <table className="table-collection">
        <thead>
          <tr>
            <th>URL</th>
            <th>Title</th>
            <th>Syntax</th>
            <th>
              Modified &nbsp;
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sort-down"
                className="svg-inline--fa fa-sort-down "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z"
                ></path>
              </svg>
            </th>
            <th>Created</th>
            <th className="aligncenter">Actions</th>
          </tr>
        </thead>
        <tbody>
          {codes.length > 0 &&
            codes.map((data, index) => (
              <tr className="clickable" key={index}>
                <td>
                  <a href={`/${data.url}`}>/{data.url}</a>
                </td>
                <td>
                  <a href="/qANzqx">Apr 10 1:49 PM</a>
                </td>
                <td>{data.setting.language.toUpperCase()}</td>
                <td>
                  <time data-hint="date: 2024-04-10T08:34:51.513Z">
                    {new Date(data.updatedAt).toLocaleString()}
                  </time>
                </td>
                <td>
                  <time data-hint="date: 2024-04-10T08:19:40.966Z">
                    {new Date(data.createdAt).toLocaleString()}
                  </time>
                </td>
                <td className="aligncenter">
                  <button
                    className="btn btn-icon hint--top"
                    data-hint="Delete Codeshare"
                    onClick={() => deleteCodesHandler({ id: data._id })}
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="trash"
                      className="svg-inline--fa fa-trash "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Codes