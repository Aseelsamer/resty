import React from 'react';
import './App.scss';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Form from './form/form.js';


class App extends React.Component {
  render(){
  return (
    <>
    < Header />
    <Form />
    <Footer />
    </>
  )
  }

}

export default App;
