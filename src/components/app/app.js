
import AppInfo from "../app-info/app-info";
import "./app.css";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App(){
    const data = [
        {name: "Ольга Д.", salary: 400, increase: false, id: 1, star: false},
        {name: "Дмитро Н.", salary: 1500, increase: false, id: 2, star: false},
        {name: "Катерина С.", salary: 2300, increase: true, id: 3, star: false}
    ]
    return(
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App;