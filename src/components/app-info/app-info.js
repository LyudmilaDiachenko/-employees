
import "./app-info.css";

const AppInfo = (props) => {

    return (
        <div className="app-info">
            <h1>
                Облік працівників в компанії
            </h1>
            <h2>Загальна кількість працівників: {props.data.length}</h2>
            <h2>Премію отримають: {props.data.filter(i => i.increase).length}</h2>
        </div>
    )
}

export default AppInfo;