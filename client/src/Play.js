import axios from 'axios';
import { useState, useEffect } from 'react';

const Play = props => {

  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [trueAnswer, setTrueAnswer] = useState([
    {correct: false}, {correct: false}, {correct: false}, {correct: false}]);

  const handleChange = e => {
    const name = e.target.id;
    console.log(name);
    for (let i = 0; i < 4; i++)
      trueAnswer[i].correct = false;
    trueAnswer[name].correct = true;
    console.log(trueAnswer);
  }

  const handleClick = e => {
    const topic = e.target.previousSibling.value;
    setFilteredQuestions(questions.filter(question =>
      question.tema == topic
    ));
    console.log(filteredQuestions);
  }

  const sendAnswer = e => {
    let j = 0;
    for (let i = 0; i < 4; i++) {
      if (trueAnswer[i].correct == true && filteredQuestions[r].answers[i].correct == true) {
        j = 1;
      }
    }
    if (j) {
      alert("Biennn!!! No sos tan bruto");
      console.log("bieeennn");
    }
    else {
      alert("Tremendo maloooo");
      console.log("malll");
    }
  }

  const Question = props => {

    const { text, tema, answers } = props.question;
  
    return (
      <div name="Callate Amparo">
        <h2>{text}</h2>
        {answers.map((answer, idx) => (
          <div key={idx}>
            <label>{answer.text}</label>
            <input type="radio" name={text} id={idx} onChange={handleChange}/>
            <br />
          </div>
        ))}
        <h4>Tema: {tema}</h4>
      </div>
    );
  };

  useEffect(() => {
    axios.get('/question/preguntas')
      .then(res => {
       console.log(res.data);
       setQuestions(res.data);
     });
  },[]);

  const r = Math.floor(Math.random()*filteredQuestions.length);

  return (
    <div>
      <br />
      <select>
        <option>Seleccionar Tema</option>
        <option>Matemática</option>
        <option>Inglés</option>
        <option>Historia</option>
        <option>Dragon Ball</option>
        <option>Fulbo</option>
        <option>Marvel</option>
      </select>
      <input type="button" value="Jugar" onClick={handleClick}/>
      <div>
        {filteredQuestions.map((question,idx) => {
          if (r === idx){
            console.log(idx);
            return (<div>
              <Question key={idx} question={question} />
              <input type="button" value="Enviar" onClick={sendAnswer}/>
              </div>)
          }
        }
        )}
      </div>
    </div>
  );
}

export default Play;
