import EmployeesListItem from "../employees-list-item/employees-list-item"

const EmployeesList = ({data, onDelete, onToogleIncrease, onToogleStar}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToogleIncrease={() => onToogleIncrease(id)}
                onToogleStar={() => onToogleStar(id)}
                />
            );            
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>        
    );
}

export default EmployeesList;