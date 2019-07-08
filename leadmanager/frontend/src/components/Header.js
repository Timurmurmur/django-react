import React, {Component} from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import style from './css/components.css';

WebFont.load({
    google: {
      families: ['Open Sans:400', 'sans-serif']
    }
  });


const LogoText = styled.h1`
    color: rgba(120,100,20,0.5);
    margin-top: 0px;
    font-size: 60px;
    font-family: 'Open Sans', sans-serif;
`


export default class Header extends Component{
    render(){
        return(
            <div className="container">
                <LogoText>To Do</LogoText>
            </div>
        );
    }
}