import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const CardDiv = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1rem;
  cursor: pointer; 
  
  .card-header {
	position: relative;
  }
  .card-image-text {
	position absolute;
    bottom: 0;
    background: rgba(32, 35, 41, 0.87);
    width: 100%;
    color: rgb(255, 255, 255);
    padding: 0 1rem;
  }

  .card-body {
    position: absolute;
    z-index: 0;
    top: 0;
	width: 100%;
	height: 0;
    overflow: hidden;
	background: rgba(47, 47, 47, 0.79);
    -webkit-transition: height 0.5s linear;
    -moz-transition: height 0.5s linear;
    -o-transition: height 0.5s linear;
    transition: height 0.5s linear;
  }

  :hover .card-body {
  	height: 100%;
  }

  .card-body .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .card-body .info span {
	color: white;
  }
  .card-body .info p {
	color: rgb(255, 152, 0);
	margin: 0.2rem 0 0 4rem;
    word-break: break-word;
    text-align: right;
  }
  .card-body .info:not(:last-child) {
	border-bottom: 1px solid rgb(160, 160, 160);
  }
`;

export default class Card extends React.Component {
  render() {
    return(
	<Link to={`/character/${this.props.id}`}>
     <CardDiv>
	  <div className="card-header">
        <img src={this.props.imageUrl} />
		<div className="card-image-text">
		  <h2>{this.props.name}</h2>
		</div>
	    <div className="card-body">
		  { Object.keys(this.props.body).map((key, i)=> {
			  return (
			    <div key={i} className="info">
			      <span>{key}</span>
			      <p>{this.props.body[[key]]}</p>
			    </div>
			  )
		    })
		  }
	    </div>
	  </div>
     </CardDiv>
	 </Link>
    )
  }
}
