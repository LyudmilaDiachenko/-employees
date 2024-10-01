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
                {name: "Катерина С.", salary: 2300, increase: false, id: 3, star: false}
            ],
            term: "",
            salaryFilter: false,
            increaseFilter: false
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
        this.setState({
            data: this.state.data.map(i => {
                if(i.id === id){
                    return {...i, star: !i.star}
                }
                return i;
            })
        })      
    }

    searchEmployees = (data, term, salaryFilter, increaseFilter) => {
        return data
        .filter(item => {
            if(term.length > 1){
                return item.name.indexOf(term) > -1
            } else {
                return true
            }
        })
        .filter(item => {
            if(salaryFilter){
                return item.salary > 1000
            } else {
                return true
            }
        })
        .filter(item => {
            if(increaseFilter){
                return item.increase
            } else {
                return true
            }
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    setSalaryFilter = (enabled) => {
        console.log("setSalaryFilter", enabled);
        this.setState({
            salaryFilter: enabled
        })
    }

    setIncreaseFilter = (enabled) => {
        console.log("setIncreaseFilter", enabled);
        this.setState({
            increaseFilter: enabled
        })
    }

    render(){
        const {data, term, salaryFilter, increaseFilter} = this.state
        const visibleData = this.searchEmployees(data, term, salaryFilter, increaseFilter)
        return(
            <div className="app">
                <AppInfo 
                    data={data}
                />
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        {...this.state}
                        setSalaryFilter={this.setSalaryFilter}
                        setIncreaseFilter={this.setIncreaseFilter}/>
                </div>
                <EmployeesList 
                    data={visibleData}
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