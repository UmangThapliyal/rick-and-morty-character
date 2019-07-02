import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .character-info {
    margin-left: 10rem;
  }
`;

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = { character: ""};
  }
  
  componentDidMount() {
    document.getElementById("home-button").style.display = "block";
    var id = this.props.match.params.id;
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(resp => resp.json())
    .then(dataJson => {
      this.setState({ character: dataJson });
    });

  }
  
  render() {
    return (
      <div className="outer-div">
        <OuterDiv>
          <div className="image-div">
            <img src={this.state.character.image} />
          </div>
          <div className="character-info yellow">
            <h1>{this.state.character.name}</h1>            
            <p>Gender : {this.state.character.gender}</p>
            <p>Species : {this.state.character.species}</p>
            {this.state.character.location && <p>Location : {this.state.character.location.name}</p>}
            {this.state.character.origin && <p>Origin : {this.state.character.origin.name}</p>}
          </div>
        </OuterDiv>
      </div>
    );
  }
}
