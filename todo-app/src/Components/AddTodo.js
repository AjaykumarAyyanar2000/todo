import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DefaultButton} from '@fluentui/react';
export class AddTodo extends Component {
    state = {
        title: '',
        value: '',
        date: ''
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title,this.state.value,this.state.date);
        this.setState({title: ''});
        this.setState({value:''});
        this.setState({date:''});
        /*this.props.addTodo(this.state.value);
        this.setState({value: ''});*/
    }
    constructor(props) {
    super(props);
    this.state = {value: 'Todo'};
    this.state= {date: '01/01/2000'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleChangeDate(e) {
    this.setState({date: e.target.date});
  }

  handleSubmit(e) {
    e.preventDefault();
  }
        onChange = (e) => this.setState({[e.target.name]: e.target.value});
        render() {
        return (
            <form onSubmit={this.onSubmit}style ={{display:'flex'}}>
            <input type="text" 
            name="title"
            style={{ flex: '10', padding: '5px'}}
            placeholder="Add Todo ...."
            value={this.state.title}
            onChange={this.onChange}
            />
       <label>
          Progress Of Work:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Todo">Todo</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Stalled">Stalled</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <input type="date" id="start" name="date"
      value={this.state.date}
      onChange={this.onChange}
       min="2000-01-01" max="2030-12-31" 
       >
         
         </input>

        
           <input
          type="submit"
            value="Submit"
            className="btn"
            style={{flex: '1'}}
            />
            </form>
        )
    }

}


function _Alerted()//props)
{

  alert("Submitted");
}
AddTodo.propTypes ={
  addTodo: PropTypes.func.isRequired

}
export default AddTodo
////  e.preventDefault();
/*this.props.addTodo(this.state.title,this.state.value,this.state.date);
this.setState({title: ''});
this.setState({value:''});
this.setState({date:''});*/