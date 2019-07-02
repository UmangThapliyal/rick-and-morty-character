import React from "react";
import styled from 'styled-components';

import Card from "./layout/Card";
import Footer from "./Fotter";
import getUrlParam from "../utils/url";

const Charactecard = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1260px;
  min-height: 40vh;
  margin: 0 auto;
`;

export default class Characters extends React.Component {
  constructor(props){
    super(props);
    this.state = {characters: [], pageInfo: []};
  }

  componentDidMount() {
    document.getElementById("home-button").style.display = "none";
	var pageNo = getUrlParam(this.props.location.search.replace("?", "")).page || "1";
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNo}`)
      .then(resp => resp.json())
      .then(dataJson => {
		dataJson.info["currentPage"] = pageNo;
        this.setState({ characters: dataJson.results, 
				pageInfo: dataJson.info 
			});
      });
  }

  render() {
    return (
	  <div className="outer-div">
        <Charactecard>
          { this.state.characters.map(character => {
			let body = { status: character.status, 
					species: character.species, 
					gender: character.gender, 
					origin: character.origin.name, 
					location: character.location.name
				  }
            return <Card key={character.id} 
                  id={character.id}
				  name={character.name}
                  created={character.created}
                  imageUrl={character.image}
                  body={body}
				/>
          }) }
        </Charactecard>
	    <Footer pageInfo={this.state.pageInfo}/>
      </div>
	)
  }
}
