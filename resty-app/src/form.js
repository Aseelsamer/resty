import React from 'react';
import './form.scss';

class Form extends React.Component{
    constructor(props) {
        super(props);
        // add state.words here and initialize it
        this.state = {
          url : '',
          method :''
        }
      }
    
      handleChange = (e) => {
          e.preventDefault();
        // let url = e.target.method.value;
        // let method = e.target.method.value;
        // update this.state.words with new words
        // this.state is immutable (you can not change it directly)
        this.setState({method:e.target.value});
      }

      handle =(e) =>{
        e.preventDefault();
        // let url = e.target.method.value;
        // let method = e.target.method.value;
        // update this.state.words with new words
        // this.state is immutable (you can not change it directly)
        this.setState({url:e.target.value}); 
      }
    
      handleClick = (e) => {
      e.preventDefault();
      this.setState({method:this.state.method,url:this.state.url})
      }

     
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleClick}>
            <label>URL</label>
            <div onChange={this.onChange}>
            <button >GO!</button>

            <input type="radio" value='get' onClick={this.handleChange}>GET</input>
            <input type="radio" value='post'onClick={this.handleChange}>POST</input>
            <input type="radio" value='put'onClick={this.handleChange}>PUT</input>
            <input type="radio" value='delete'onClick={this.handleChange}>DELETE</input>
            </div>

            </form>

          </div>
        )
      } 
}
  export default Form;