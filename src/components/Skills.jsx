import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import AddBox from "@mui/icons-material/AddBox";

const Skills = ({ formData, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSkillsChange = (e) => {
    handleChange("skills", e.target.name, e.target.value);
  };

  return (
    <div className="w-64 md:w-76 lg:w-96  flex flex-col items-center justify-center gap-6 p-4 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-primary)] rounded-lg shadow-md ">
      <Button
        variant="outlined"
        endIcon={<AddBox />}
        sx={{
          width: "100%",
          minWidth: "100%",
          fontSize: "1rem",
          fontWeight: "bold",
          border: "1px solid grey",
          color: "var(--color-text-primary)", // Default text color

          backgroundColor: "var(--color-bg-primary)", // Default background
          "&:hover": { backgroundColor: "gray.100" }, // Hover effect
          "&.dark": {
            backgroundColor: "var(--color-bg-secondary)", // Dark mode background
            "&:hover": { backgroundColor: "gray.700" }, // Dark mode hover
          },
          borderRadius: "8px", // Rounded corners
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Skills
      </Button>

      {isOpen && (
        <form form className="w-full space-y-4">
          <input
            type="text"
            name="languages"
            placeholder="Languages"
            value={formData.languages}
            onChange={handleSkillsChange}
            className="w-full px-3 py-2 border border-gray-300  bg-white  text-gray-900  rounded-md focus:outline-none shadow-lg shadow-gray-400 "
          />
          <input
            type="text"
            name="technologies"
            value={formData.technologies}
            onChange={handleSkillsChange}
            placeholder="Technologies / Frameworks"
            className="w-full px-3 py-2 border border-gray-300  bg-white  text-gray-900  rounded-md focus:outline-none shadow-lg shadow-gray-400 "
          />
          <input
            type="text-area"
            name="databases"
            placeholder="Databases"
            value={formData.databases}
            onChange={handleSkillsChange}
            className="w-full px-3 py-2 border border-gray-300  bg-white  text-gray-900  rounded-md focus:outline-none shadow-lg shadow-gray-400 "
          />
        </form>
      )}
    </div>
  );
};

export default Skills;
