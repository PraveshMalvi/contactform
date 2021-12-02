import React from "react";

function Other({ formData, setFormData }) {
  const countryHandler = (e) => {
    setFormData({ ...formData, nationality: e.target.value });
  };
  const jobHandler = (e) => {
    setFormData({ ...formData, occupation: e.target.value });
  };
  const bioHandler = (e) => {
    setFormData({ ...formData, bio: e.target.value });
  };
  return (
    <>
      <div className="otherinfo">
        <form>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Nationality
            </label>
            <input
              type="text"
              value={formData.nationality}
              onChange={countryHandler}
              className="form-control"
              id="country"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="job" className="form-label">
              Occupation
            </label>
            <input
              type="text"
              value={formData.occupation}
              onChange={jobHandler}
              className="form-control"
              id="job"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <input
              type="text"
              value={formData.bio}
              onChange={bioHandler}
              className="form-control"
              id="bio"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Other;
