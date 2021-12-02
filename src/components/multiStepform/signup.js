import React from "react";

function Signup({ formData, setFormData }) {
  const emailHandler = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const passwordHandler = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const confirmPwdHandler = (e) => {
    setFormData({ ...formData, confirmPassword: e.target.value });
  };
  return (
    <>
      <div className="signup">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={emailHandler}
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={passwordHandler}
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={confirmPwdHandler}
              className="form-control"
              id="confirm-password"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
