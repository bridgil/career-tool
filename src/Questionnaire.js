import React, { useState } from "react";

const Questionnaire = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    branch: "",
    yearsOfService: "",
    mos: "",
    skills: "",
    certifications: "",
    interests: "",
    workEnvironment: "",
    goals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Military Background</h2>
      <label>
        Branch of Service:
        <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
      </label>
      <label>
        Years of Service:
        <input type="number" name="yearsOfService" value={formData.yearsOfService} onChange={handleChange} />
      </label>
      <label>
        MOS/AFSC/Rating:
        <input type="text" name="mos" value={formData.mos} onChange={handleChange} />
      </label>

      <h2>Skills & Certifications</h2>
      <label>
        Skills:
        <textarea name="skills" value={formData.skills} onChange={handleChange} />
      </label>
      <label>
        Certifications:
        <textarea name="certifications" value={formData.certifications} onChange={handleChange} />
      </label>

      <h2>Career Interests</h2>
      <label>
        Industries of Interest:
        <textarea name="interests" value={formData.interests} onChange={handleChange} />
      </label>
      <label>
        Preferred Work Environment:
        <select name="workEnvironment" value={formData.workEnvironment} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </label>

      <h2>Goals</h2>
      <label>
        Career Goals:
        <textarea name="goals" value={formData.goals} onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Questionnaire;
