import React, { useState } from "react";
import "./style.css";

const data = [
  {
    name: "",
    age: "",
  },
  {
    name: "",
    age: "",
  },
];

const DynamicForm = () => {
  const [formData, setFormData] = useState(data);
  const handleRemove = (index) => {
    const newList = [...formData];
    const result = newList.filter((items, idx) => idx !== index);
    setFormData(result);
  };
  const handleChange = (event, index) => {
    const { value, name } = event.target;
    const newList = [...formData];
    newList[index][name] = value;
    setFormData(newList);
  };

  const handleAddmore = () => {
    const newData = { name: "", age: "" };
    const newList = [...formData, newData];
    setFormData(newList);
  };

  const handleSumbit = () => {
    console.log(formData, "formDATA");
  };

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          {formData.map((items, index) => {
            return (
              <div key={index} className="content">
                <input
                  type="text"
                  value={items.name}
                  className="input"
                  name="name"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Enter name"
                />
                <input
                  type="text"
                  value={items.age}
                  className="input"
                  name="age"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Enter age"
                />
                <div className={index === 0 && "button-space"}></div>
                {index >= 1 && (
                  <button
                    className={"button"}
                    onClick={() => handleRemove(index)}
                  >
                    Delete
                  </button>
                )}
              </div>
            );
          })}
          <button className="button" onClick={handleAddmore}>
            Add More
          </button>

          <button className="button" onClick={handleSumbit}>
            Submit Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
