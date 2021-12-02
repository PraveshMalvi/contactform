import React, { useState } from "react";
import Other from "./other";
import Personal from "./personal";
import Signup from "./signup";
import "./style.css";

function MultiStepForm() {
  const head = ["Sign Up", "Personal Info", "Other Info"];
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    occupation: "",
    bio: "",
  });
  const [page, setPage] = useState(0);
  const showPage = () => {
    if (page === 0) {
      return <Signup formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Personal formData={formData} setFormData={setFormData} />;
    } else {
      return <Other formData={formData} setFormData={setFormData} />;
    }
  };

  const prevBtn = () => {
    setPage((currPage) => currPage - 1);
  };
  const nextBtn = () => {
    if (page === head.length - 1) {
      alert("Form Submitted");
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  return (
    <div className="multistepform">
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-wrap">
        <div className="text-center mb-4">
          <h1>{head[page]}</h1>
        </div>
        {showPage()}
        <div className="text-center mt-4 mb-3">
          <button
            disabled={page === 0}
            onClick={prevBtn}
            className="btn btn-primary me-1"
          >
            Prev
          </button>
          <button onClick={nextBtn} className="btn btn-primary ms-1">
            {page === head.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
