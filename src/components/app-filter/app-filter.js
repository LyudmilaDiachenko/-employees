import "./app-filter.css";

const AppFilter = ({salaryFilter, setSalaryFilter, increase, setIncreaseFilter}) => {
    return(
        <div className="btn-group">
            <label className={`btn ${!salaryFilter && !setIncreaseFilter ? "btn-light" : "btn-outline-light"}`}>
                <input className="opacity-input"
                    type="radio"
                    name="filter"
                    onChange={() => [setSalaryFilter(false), setIncreaseFilter(false)]}
                />
                    Усі працівники
            </label>
            <label className={`btn ${increase ? "btn-light" : "btn-outline-light"}`}>
                <input className="opacity-input"
                    type="radio"
                    name="filter"
                    onChange={() => [setSalaryFilter(false), setIncreaseFilter(true)]}
                />
                    На підвищення
            </label>
            <label className={`btn ${salaryFilter ? "btn-light" : "btn-outline-light"}`}>
                <input className="opacity-input"
                    type="radio"
                    name="filter"
                    onChange={() => [setSalaryFilter(true), setIncreaseFilter(false)]}
                />
                    З/П більше $1000
            </label>
        </div>
    );
}

export default AppFilter;