import React from "react";
import { useState } from "react";
import CvForm from "./cvform/CvForm.js";
import CvPreview from "./cvpreview/CvPreview.js";
import uuidv4 from "../utils/uuid";

const emptyCv = {
  personalInformations: {
    firstName: "",
    lastName: "",
    title: "",
    adress: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  educationItems: [
    {
      id: "emptyId1",
      content: {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    },
  ],
  experienceItems: [
    {
      id: "emptyId2",
      content: {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
    },
  ],
};

const exampleCV = {
  personalInformations: {
    firstName: "John",
    lastName: "Doe",
    title: "Web Developer",
    adress: "123 Main St",
    phoneNumber: "123-456-7890",
    email: "john.doe@gmail.com",
  },
  educationItems: [
    {
      id: uuidv4(),
      content: {
        universityName: "University of California, Berkeley",
        city: "Berkeley",
        degree: "Bachelor of Science",
        subject: "Computer Science",
        from: "September, 2018",
        to: "May, 2020",
      },
    },
    {
      id: uuidv4(),
      content: {
        universityName: "University of California, Berkeley",
        city: "Berkeley",
        degree: "Bachelor of Science",
        subject: "Computer Science",
        from: "September, 2018",
        to: "May, 2020",
      },
    },
  ],
  experienceItems: [
    {
      id: uuidv4(),
      content: {
        position: "Software Engineer",
        company: "Google",
        city: "Mountain View",
        from: "September, 2018",
        to: "May, 2020",
      },
    },
    {
      id: uuidv4(),
      content: {
        position: "Software Engineer",
        company: "Facebook",
        city: "Mountain View",
        from: "September, 2018",
        to: "May, 2020",
      },
    },
  ],
};

const Main = () => {
  const [cv, setCv] = useState(emptyCv);

  const handleChangeEducation = (event, id) => {
    let items = [...cv.educationItems];
    let queryItem = items.find((element) => element.id == id);
    let inputFieldName = event.target.name;

    queryItem.content[inputFieldName] = event.target.value;

    setCv((prevState) => ({
      ...prevState,
      educationItems: items,
    }));
  };

  const handleChangeExperience = (event, id) => {
    let items = [...cv.experienceItems];
    let queryItem = items.find((element) => element.id == id);
    let inputFieldName = event.target.name;

    queryItem.content[inputFieldName] = event.target.value;

    setCv((prevState) => ({
      ...prevState,
      experienceItems: items,
    }));
  };

  const handleChangePersonal = (event) => {
    let inputFieldName = event.target.name;

    setCv((prevState) => ({
      ...prevState,
      personalInformations: {
        ...prevState.personalInformations,
        [inputFieldName]: event.target.value,
      },
    }));
  };
  //handleChangePersonal(event) {
  //  let item = { ...this.state.personalInformations };
  //  let inputFieldName = event.target.name;
  //  item[inputFieldName] = event.target.value;
  //  this.setState({ personalInformations: item });
  //}

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      educationItems: [
        ...prevState.educationItems,
        {
          id: uuidv4(),
          content: {
            universityName: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: "",
          },
        },
      ],
    }));
  };

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experienceItems: [
        ...prevState.experienceItems,
        {
          id: uuidv4(),
          content: {
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
          },
        },
      ],
    }));
  };

  const handleRemoveEducation = (id) => {
    let items = [...cv.educationItems];
    let index = items.findIndex((element) => element.id == id);
    items.splice(index, 1);
    setCv((prevState) => ({
      ...prevState,
      educationItems: items,
    }));
  };

  const handleRemoveExperience = (id) => {
    let items = [...cv.experienceItems];
    let index = items.findIndex((element) => element.id == id);
    items.splice(index, 1);
    setCv((prevState) => ({
      ...prevState,
      experienceItems: items,
    }));
  };

  const handleLoadExample = () => {
    setCv(exampleCV);
  };

  const handleReset = () => {
    setCv(emptyCv);
  };

  return (
    <div className="main">
      <CvForm
        personalInformations={cv.personalInformations}
        experienceItems={cv.experienceItems}
        educationItems={cv.educationItems}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleRemoveExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleRemoveEducation}
        onChangePersonal={handleChangePersonal}
        onLoadExample={handleLoadExample}
        onReset={handleReset}
      />
      <CvPreview
        personalInformations={cv.personalInformations}
        experienceItems={cv.experienceItems}
        educationItems={cv.educationItems}
      />
    </div>
  );
};

export default Main;
