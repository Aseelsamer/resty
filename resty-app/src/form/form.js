import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {

    constructor(props) {
      super(props);
      // add state.words here and initialize it
      this.state = {
        url: ' ',
        method: ' ',
        body :{}
      }

   
    }
  
    onChangeValue = async (e) => {
      e.preventDefault();
      console.log(e.target.value);
  
      let url = e.target.url.value;
      let method = e.target.method.value;
      let body = e.target.text.value;

      if(!body){
        this.setState({ url, method });
      }else{
        this.setState({url,method,body})
      }
      
  componentDidUpdate= async (prevProps, prevState,snapshot) =>{
    try{
      if(this.state.method !== prevState.method && this.state.url !== prevState.url){
        if(this.state.method === 'get' || this.state.method=== 'delete'){
          let data = await super(this.state.method,this.state.url)
          this.props.handler(data,this.state)
        }
        else if (this.state.method === 'put' || this.state.method === 'post'){
          let body = JSON.parse(this.state.body)
          let record= await (await superagent(this.state.method,this.state.url)).send(body);
          this.props.handler(record,this.state);
        }
        let check;
        if (localStorage.getItem('queries')) {
          let queries = JSON.parse(localStorage.getItem('queries'));
          console.log(queries)
         
            queries.some(obj=>{
              if(obj.method===this.state.method&&obj.url===this.state.url&&JSON.stringify(obj.body)===JSON.stringify(this.state.body)){
                return check = true; 
              }else { return check = false }
            });
        
          if (!check) {
            let queryArray = JSON.parse(localStorage.getItem('queries'));;
            queryArray.push(this.state);
            localStorage.setItem('queries', JSON.stringify(queryArray))
          }
        } else {
          let queryArray = [];
          queryArray.push(this.state);
          localStorage.setItem('queries', JSON.stringify(queryArray))
        }
      }
    }catch(err){console.log(err)}
      }
    }
  
    
    render() {
      return (
        <div>
          <form onSubmit={this.onChangeValue} className = "content">
            <label>URL</label>
            <input id="url" type="url" name="url" />
            <input type='textArea' name='text' />
            <div>
              <label for="method">Get</label>
              <input type="radio" defaultChecked value="Get " name="method" />
              <label for="method">Post</label>
              <input type="radio" value="Post " name="method" />
              <label for="method">Delete</label>
              <input type="radio" value="Delete " name="method" />
              <label for="method">Put</label>
              <input type="radio" value="Put " name="method" />
            <button type="submit"> GO !</button>
            </div>
  
          </form>
  
      
        </div>
      )
    }
  
  }
 
  export default Form;