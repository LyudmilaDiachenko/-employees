import { Component } from "react";

import AppInfo from "../app-info/app-info";
import "./app.css";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Ольга Д.", salary: 400, increase: false, id: 1, star: false},
                {name: "Дмитро Н.", salary: 1500, increase: false, id: 2, star: true},
                {name: "Катерина С.", salary: 2300, increase: true, id: 3, star: false}
            ]
        }
    }

    addItem = (name, salary) => {
        this.setState({
            data: this.state.data.concat([{
                name,
                salary,
                increase: false,
                id: new Date() * 1,
                star: false
            }])
        })
    }

    deleteItem = (id) => {
        this.setState({
            data: this.state.data.filter(i => i.id !== id)
        })
    }

    onToogleIncrease = (id) => {
        this.setState({
            data: this.state.data.map(i => {
                if(i.id === id){
                    return {...i, increase: !i.increase}
                }
                return i;
            })
        })  
    }

    onToogleStar = (id) => {
        console.log(`star ${id}`);
    }

    render(){
        return(
            <div className="app">
                <AppInfo 
                    data={this.state.data}
                />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToogleIncrease={this.onToogleIncrease}
                    onToogleStar={this.onToogleStar}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}

export default App;