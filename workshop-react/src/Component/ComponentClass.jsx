import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monTexte: "Texte initial",
      value: 0,
    };
  }

  handleClick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <>
        <p>{this.state.monTexte}</p>
        <p>Ceci est un composant de classe :</p>
        <Button variant="primary" onClick={this.handleClick}>
          Incrémenter
        </Button>
        <h2>{this.state.value}</h2>
      </>
    );
  }
}

export default ComponentClass;
