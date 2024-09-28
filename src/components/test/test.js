import { Component } from "react";

class WhoAmI extends Component {
    constructor(props){
        super(props);
        this.state = {
            years: 27,
            position: ""
        }
    }

    nextYears = () => {
    this.setState(state =>({
        years: state.years + 1
    }))    
    }

    commitInputChange = (e) => {
      this.setState({
        position: e.target.value
      })
    }

    render(){
        const {name, surname, link} = this.props
        const {position, years} = this.state
        return(
            <div>
                <button onClick={this.nextYears}>{this.state.text}</button>
                <h1>My name is - {name}, 
                    surname - {surname}, 
                    age - {years}, 
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                  <span>ВВедіть посаду</span>
                  <input type="text" onChange={this.commitInputChange} />
                </form>
            </div>
        )
    }      
}

function App(){
    return(
        <div className="App">
            <WhoAmI name="John" surname="Smit" link="facebook.ua"/>
            <WhoAmI name="Kate" surname="Black" link="ins.ua"/>
        </div>
    )
}

export default App;



// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         counter: props.counter,
//         min: -50,
//         max: 50,
//       }
//     }
    
//     // Используйте только стрелочную форму методов
//     // Почему? Подробный ответ будет в следующем уроке
//      change = (newValue) => {
//        this.setState(state =>({
//         counter: newValue
//       }))
//      }
    
//     render() {
//       return (
//         <div class="app">
//           <div class="counter">{this.state.counter}</div>
//           <div class="controls">
//             <button onClick={()=>{this.change(this.state.counter + 1)}}>INC</button>
//             <button onClick={()=>{this.change(this.state.counter - 1)}}>DEC</button>
//             <button onClick={()=>{this.change(
//                 Math.round(
//                   Math.random() * (this.state.max - this.state.min)
//                 ) + this.state.min
//               )}}>RND</button>
//             <button onClick={()=>{this.change(0)}}>RESET</button>
//           </div>
//         </div>
//       )
//     }
//   }
  
//   ReactDOM.render(<App counter={0}/>, document.getElementById('app'));
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов