import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .nav-button {
	height: 2rem;
    width: 2rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    color: rgb(240, 248, 255);
    background: rgb(51, 51, 51);
    border: none;
	cursor: pointer;
	margin: 0 0.5rem;
  }
  .nav-button:hover {
	background: rgb(255,152,0);
  }
  .nav-button:focus {
	outline: none;
  }
`;

export default class Footer extends React.Component {

  getPageNo(url) {
    return "?page=" + url.split("?page=")[1];
  }
  
  render() {
    return (
      <FooterDiv>
      {this.props.pageInfo.prev && 
        <a href={this.getPageNo(this.props.pageInfo.prev)}>
          <button className="nav-button">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </a>
      }
      {this.props.pageInfo.next && 
        <a href={this.getPageNo(this.props.pageInfo.next)}>
          <button className="nav-button">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </a>
      }
      </FooterDiv>
    )
  }
};
