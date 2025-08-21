import "./Game.css"
import "./Result"
import Result from "./Result";

function Game(props){
    const percentage = Math.round(props.step/props.questions_count*100)
    if (props.question){
        return(
                <div className="App">
                    <div className="progress">
                        <div className="progress__inner" style={{width: `${percentage}%`}}></div>
                    </div>
                    <h1>{props.question.title}</h1>
                    <ul>
                        {props.question.variants.map((answer, index) => (
                            <li onClick={() => props.onClickVariant(index)} key={index}>{answer}</li>
                        ))}
                    </ul>
                </div>
            );
    }else{
        return(
            <Result correct={props.correct} questions_count={props.questions_count}></Result>
        )
    }
}
export default Game;