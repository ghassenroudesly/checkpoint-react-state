import "./App.css";
import React from "react";
import photo from "./assets/photo.jpg";

class App extends React.Component {
  state = {
    person: {
      fullName: "Ghassen Roudesli",
      bio: "",
      profession: "Junior Full Stack JS Developer",
      imgSrc: { photo },
    },
    show: false,
    count: 0,
    intervalId: 0,
  };
  handleClick = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState((prevState) => {
        return {
          ...prevState,
          intervalId: 0,
          count: 0,
        };
      });
      return;
    }
    const newIntervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);
    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="app">
        <div className="profile">
          {" "}
          {this.state.show && (
            <div>
              <img src={photo} alt="ghassen roudesli"></img>
              <h2>{this.state.person.fullName}</h2>
              <h3>{this.state.person.profession}</h3>
              <p>{this.state.person.bio}</p>
              <h4>
                life cycle= <input type="text" value={this.state.count} />
                secondes
              </h4>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            this.handleShowPerson();
            this.handleClick();
          }}
          className="btn"
        >
          Show Person
        </button>
      </div>
    );
  }
}
export default App;