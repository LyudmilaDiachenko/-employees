import { Component } from "react";
import "./employees-add-form.css"

class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    onValueChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({name: ''})
        this.setState({salary: ''})
        this.props.onAdd(e.target.name.value, e.target.salary.value)
    }

    render(){
        return (
            <div className="app-add-form">
                <h3>Додати нового працівника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Ім'я?"
                        name="name" 
                        value={this.state.name}
                        onChange={this.onValueChange}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary" 
                        value={this.state.salary}
                        onChange={this.onValueChange}
                    />
                    <input type="submit" className="btn btn-outline-light" value="Додати" />
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;