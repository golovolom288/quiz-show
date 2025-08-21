import "./Game.css"

function Result(props){
    return(
            <div className="App">
                <div className="result">
                    <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"></img>
                    <h2>Вы отгадали {props.correct} ответа из {props.questions_count}</h2>
                    <button>Попробовать снова</button>
                </div>
            </div>
        );
}
export default Result;