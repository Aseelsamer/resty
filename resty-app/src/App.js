import React from 'react';
import './App.scss';
import Header from './header/header.js';
import Form from './form/form.js';
import Footer from './footer/footer.js';
import Results from './results';
import { If, Then, Else } from './if/if.js';
import History from './hestory.js';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter, MemoryRouter, HashRouter } from 'react-router-dom';
import Help from './help.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      data: {},
      condition: false,
      url: '',
      method: '',
      body: {}
    }
  }

  handleForm = (data, obj) => {
    console.log("inside HandleForm!! ", data);
    let count = data.body.count;
    let results = data.body;

    this.setState({ count: count, results: results, data: data });

    componentDidUpdate(prevProps, prevState, snapshot){
      if (this.state.data !== prevState.data) {
        this.setState({ condition: true })
      }
    }

  }

  render() {
    return (
      <BrowserRouter>
        < Header />
        <main>
          <switch>
          <Route exact path="/">

          <Form handler={this.handleForm} />
          <If condition={this.state.condition}>
                <Then>
                  <Results data={this.state.data} />
                </Then>
                <Else>
                  <p>In else</p>
                  <div>
                    <img src='https://i.gifer.com/YCZH.gif' alt='loading' width='200px'></img>
                  </div>
                </Else>
              </If>
            </Route>
            <Route exact path="/history">
          <section>
            <History />
          </section>
          </Route>
          <Route exact path="/history">
            <Help/>
          </Route>
          </switch>
        </main>
        <Footer />
      </BrowserRouter>
    )
  }

}

export default App;
