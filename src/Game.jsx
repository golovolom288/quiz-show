import "./Game.css"

function Game(props){
    return(
            <div className="App">
                <div className="progress">
                    <div className="progress__inner"></div>
                </div>
                <h2>{props.question}</h2>
                <ul>
                    <li>Это функция для хранения данных компонента</li>
                    <li>Это глобальный стейт</li>
                    <li>Это когда включешь компьютер</li>
                </ul>
            </div>
        );
}
export default Game;