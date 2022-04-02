import React, { Component } from "react";
import CvForm from "./cvform/CvForm.js";
import CvPreview from "./cvpreview/CvPreview.js";
import uuidv4 from "../utils/uuid";

class Main extends Component {
  constructor() {
    super();

    this.state = {
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
          id: "",
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
          id: "",
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
  }

  handleChangeEducation(event, id) {
    let items = [...this.state.educationItems];
    let queryItem = items.find((element) => element.id == id);
    let inputFieldName = event.target.name;

    queryItem.content[inputFieldName] = event.target.value;

    this.setState({ educationItems: items });
  }

  handleAddEducation() {
    let items = [
      ...this.state.educationItems,
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
    ];

    this.setState({ educationItems: items });
  }

  handleDeleteEducation(id) {
    let items = [...this.state.educationItems];
    let filterdItems = items.filter((item) => {
      return item.id != id;
    });

    this.setState({ educationItems: filterdItems });
  }

  handleChangeExperience(event, id) {
    let items = [...this.state.experienceItems];
    let queryItem = items.find((element) => element.id == id);
    let inputFieldName = event.target.name;

    queryItem.content[inputFieldName] = event.target.value;

    this.setState({ experienceItems: items });
  }

  handleAddExperience() {
    let items = [
      ...this.state.experienceItems,
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
    ];

    this.setState({ experienceItems: items });
  }

  handleDeleteExperience(id) {
    let items = [...this.state.experienceItems];
    let filterdItems = items.filter((item) => {
      return item.id != id;
    });

    this.setState({ experienceItems: filterdItems });
  }

  handleChangePersonal(event) {
    let item = { ...this.state.personalInformations };
    let inputFieldName = event.target.name;

    item[inputFieldName] = event.target.value;

    this.setState({ personalInformations: item });
  }

  handleLoadExample() {
    this.setState({
      personalInformations: {
        firstName: "Janis",
        lastName: "Boucard",
        title: "Data Scientist",
        adress: "14 rue Grande Biesse, 44200 Nantes",
        phoneNumber: "07 85 39 65 32",
        email: "janis.boucard@gmail.com",
        description: "I'm looking for a job!",
      },
      educationItems: [
        {
          id: "fakeId1",
          content: {
            universityName: "Arts et Métiers",
            city: "Angers",
            degree: "Industrial Engineering",
            subject: "Idk",
            from: "2019",
            to: "2022",
          },
        },
        {
          id: "fakeId2",
          content: {
            universityName: "IAE Nantes",
            city: "Nantes",
            degree: "Management",
            subject: "Idk",
            from: "2022",
            to: "2023",
          },
        },
      ],
      experienceItems: [
        {
          id: "fakeId3",
          content: {
            position: "Continuous Improvement Engineer",
            company: "GF Palette",
            city: "Carentoir",
            from: "2019",
            to: "2022",
          },
        },
        {
          id: "fakeId4",
          content: {
            position: "Data Scientist",
            company: "AiHerd",
            city: "Nantes",
            from: "2022",
            to: "2023",
          },
        },
      ],
    });
  }

  handleReset() {
    this.setState({
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
          id: "",
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
          id: "",
          content: {
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
          },
        },
      ],
    });
  }

  render() {
    return (
      <div className="main">
        <CvForm
          personalInformations={this.state.personalInformations}
          experienceItems={this.state.experienceItems}
          educationItems={this.state.educationItems}
          onChangeExperience={this.handleChangeExperience.bind(this)}
          onAddExperience={this.handleAddExperience.bind(this)}
          onDeleteExperience={this.handleDeleteExperience.bind(this)}
          onChangeEducation={this.handleChangeEducation.bind(this)}
          onAddEducation={this.handleAddEducation.bind(this)}
          onDeleteEducation={this.handleDeleteEducation.bind(this)}
          onChangePersonal={this.handleChangePersonal.bind(this)}
          onLoadExample={this.handleLoadExample.bind(this)}
          onReset={this.handleReset.bind(this)}
        />
        <CvPreview
          personalInformations={this.state.personalInformations}
          experienceItems={this.state.experienceItems}
          educationItems={this.state.educationItems}
        />
      </div>
    );
  }
}

export default Main;
