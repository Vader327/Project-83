import React from 'react';
import { Header } from 'react-native-elements';

const MyHeader = props=>{
  return(
    <Header backgroundColor="#1c77ff"
    centerComponent={{
      text: props.title,
      style: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold'
      }}} />
  )
}

export default MyHeader;