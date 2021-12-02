import React from "react";

function Personal({ formData, setFormData }) {
  const nameHandler = (e) => {
    setFormData({ ...formData, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setFormData({ ...formData, lastName: e.target.value });
  };
  const usernameHandler = (e) => {
    setFormData({ ...formData, username: e.target.value });
  };
  return (
    <>
      <div className="personalinfo">
        <form>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={nameHandler}
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={lastNameHandler}
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={usernameHandler}
              className="form-control"
              id="username"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Personal;
