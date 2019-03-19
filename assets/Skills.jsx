import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInLeft, fadeInRight } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

const FadeInDiv = styled.div`
  animation: 3s ${fadeInAnimation};
`;
const FadeInLeftDiv = styled.div`
  animation: 2s ${fadeInLeftAnimation};
`;
const FadeInRightDiv = styled.div`
  animation: 2s ${fadeInRightAnimation};
`;

class Skills extends React.Component{
  constructor(props) {
  super(props);
}
render(){

  const skillsStyle = {
    marginTop: '25px',
    border: 'solid',
    borderRadius: '5px',
    borderColor: '#424242',
    padding: '10px',
    backgroundColor: '#303030'
  };
  const skillGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  };
  const skillTypesStyle ={
    margin: '25px',
    border: 'solid',
    borderRadius: '5px',
    borderColor: '#424242',
    padding: '10px',
    backgroundColor: '#303030',
    textAlign: 'center'
  };
  return (
    <div>
      <FadeInDiv style = {skillsStyle}>
        <h1>The Chops</h1>
        <hr/>
        <p>Pulling from all aspects of my life whether it be my time at Epicodus, my short year in Community College, the years in retail, or even the character molder that was high school I have decided to break down the skills I obtained into two catagories.</p>
      </FadeInDiv>
      <div style = {skillGrid}>
        <FadeInLeftDiv style = {skillTypesStyle}>
          <h1>Technical Skills</h1>
          <hr/>
          <ul style={skillGrid}>
            <div>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>BootStrap</li>
            </div>
            <div>
              <li>Adobe Photoshop(certifed)</li>
              <li>Git</li>
              <li>CMD</li>
              <li>TDD</li>
              <li>Angular</li>
              <li>JQuery</li>
              <li>SQL Databases</li>
            </div>
          </ul>
        </FadeInLeftDiv>
        <FadeInRightDiv style = {skillTypesStyle}>
          <h1>Communicable Skills/Traits</h1>
          <hr/>
          <ul style = {skillGrid}>
            <div>
              <li>Team Player</li>
              <li>Problem Solver</li>
              <li>Communicative</li>
              <li>Focused</li>
              <li>Resourceful</li>
            </div>
            <div>
              <li>Know when/what to prioritize</li>
              <li>Compasionate</li>
              <li>Creative Thinker</li>
              <li>Honest</li>
              <li>Know when to ask for help</li>
            </div>
          </ul>
        </FadeInRightDiv>
      </div>
    </div>


    );
  }
  }

  export default Skills;
