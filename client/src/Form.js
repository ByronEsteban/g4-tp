import axios from 'axios';
import { useState } from 'react';

const Form = props => {


const [hiddenForm, setHiddenForm] = useState(true);
const changeHiddenForm = () => {
  setHiddenForm(prev => !prev)
}

  const [answerData, setAnswerData] = useState([
    {text: 'MArsupial', correct: false},
    {text: '', correct: false},
    {text: '', correct: false},
    {text: '', correct: false}]);

  console.log(answerData);
  console.log(answerData[0]);

  const [formData, setFormData] = useState({
    text: '',
    tema: '',
    answers: answerData
  });

  console.log(formData);

  const [temp, setTemp] = useState({
    text: '', tema: '', text1: '', text2: '', text3: '', text4: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Sending data to server...', formData);
  };

  const handleChange = e => {
    const name = e.target.previousSibling.name;
    console.log(name);
    // const prevname = name;
    for (let i = 0; i < 4; i++)
      answerData[i].correct = false;
    answerData[name].correct = true;
    console.log(answerData);
  };

  const prueba = e => {
    temp.tema = e.target.value;
  };

  const addAnswer = e => {
    formData.text = temp.text;
    formData.tema = temp.tema;
    answerData[0].text = temp.text1;
    answerData[1].text = temp.text2;
    answerData[2].text = temp.text3;
    answerData[3].text = temp.text4;
    axios.post('/question/preguntas', formData)
      .then(res => {setTemp({text: '', tema: '', text1: '', text2: '', text3: '', text4: ''});
    });
    console.log(formData);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div id="myCarousel" className="carousel slide text-bg-dark" data-bs-ride="carousel">
<div className="carousel-indicators text-bg-dark">
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className="active" aria-current="true"></button>
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" className=""></button>
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6" className=""></button>
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 7" className=""></button>
</div>
<div className="carousel-inner text-bg-dark">
<div className="carousel-item">
<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

<div className="container">
<div className="carousel-caption text-start text-bg-dark">
<p className = "text-center text-bg-dark fs-3">Matematicas</p>
<p className="text-center">
<p className="btn btn-warning"><a href="#ingles" className="nav-link px-2 text-dark">Jugar</a></p>
</p>
</div>
</div>
</div>
<div className="carousel-item">
<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

<div className="container">
<div className="carousel-caption text-end">
<p className="text-center">
<p className="text-center fs-3">Historia Argentina</p>
<p className="btn btn-warning"><a href="#historiarg" className="nav-link px-2 text-dark">Jugar</a></p>
</p>
</div>
</div>
</div>
<div className="carousel-item">
<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

<div className="container">
<div className="carousel-caption text-end">
<p className="text-center">
<p className="text-center fs-3">Marvel</p>
<p className="btn btn-warning"><a href="#marvel" className="nav-link px-2 text-dark">Jugar</a></p>
</p>
</div>
</div>
</div>
<div className="carousel-item active">
<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

<div className="container">
<div className="carousel-caption">
<h1>Preguntados la35</h1>
<p>Para jugar y elegir el tema de las preguntas o preguntar pase la pagina</p>
<p className="btn btn-warning"><a href="#random" className="nav-link px-2 text-dark">¡Sorprendeme!</a></p>
</div>
</div>
</div>
<div className="carousel-item">
<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

<div className="container">
<div className="carousel-caption text-end">
<p className="text-center">
<p className="text-center fs-3">Dragon Ball</p>
<p className="btn btn-warning"><a href="#db" className="nav-link px-2 text-dark">Jugar</a></p>
</p>
</div>
</div>
</div>
<div className="carousel-item">
<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

<div className="container">
<div className="carousel-caption text-end">
<p className="text-center">
<p className="text-center fs-3">Ingles</p>
<p className="btn btn-warning"><a href="#ingles" className="nav-link px-2 text-dark">Jugar</a></p>
</p>
</div>
</div>
</div>
<div className="carousel-item">
<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

<div className="container">
<div className="carousel-caption text-end">
<p className="text-center">
<p className="text-center fs-3">Ajedrez</p>
<p className="btn btn-warning"><a href="#ajedrez" className="nav-link px-2 text-dark">Jugar</a></p>
</p>
</div>
</div>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>

<div className="text-bg-dark"><svg></svg></div>
<div className="text-bg-dark"hidden={!hiddenForm}>
<div className="text-center">
  <button className="btn btn-warning" onClick={changeHiddenForm}>Hacer Pregunta</button>
  </div>
  <svg>
  </svg>
</div>

<div id="preguntas"className="text-bg-dark text-center" hidden={hiddenForm}>

  <button className="btn btn-warning" onClick={changeHiddenForm}>Me arrepentí</button>
  <br/>
  <br/>
  <select onChange={prueba}>
        <option>Seleccionar Tema</option>
        <option>Dragon Ball</option>
        <option>Marvel</option>
        <option>Inglés</option>
        <option>DC</option>
        <option>Stranger Things</option>
        <option>The Walking Dead</option>
        <option>4to 4ta</option>
      </select>
  <br/>
  <br/>
  <label>¿Cúal es tu pregunta? : </label>
  <br />
  <input

    required
    type="text"
    name="text"
    onChange={e => setTemp({...temp, text: e.target.value})}
    value={temp.text}
  />
  <div className="rectangle">
  <br />
  <label>Respuesta 1: </label>
  <br/>
  <input
    className="text-bg-danger"
    type="text"
    name= "0"
    required
    onChange={e => setTemp({...temp, text1: e.target.value})}
    value={temp.text1}
  />
  <input name="qsy" onChange={handleChange} type="radio" />
  <br />
  <label>Respuesta 2: </label>
  <br/>
  <input
    className="text-bg-danger"
    type="text"
    name="1"
    required
    onChange={e => setTemp({...temp, text2: e.target.value})}
    value={temp.text2}
  />
  <input name="qsy" onChange={handleChange} type="radio" />
  <br />

  <label>Respuesta 3: </label>
  <br/>
  <input
    className="text-bg-danger"
    type="text"
    name="2"
    required
    onChange={e => setTemp({...temp, text3: e.target.value})}
    value={temp.text3}
  />
  <input name="qsy" onChange={handleChange} type="radio" />
  <br />

  <label>Respuesta 4: </label>
  <br/>
  <input
    className="text-bg-danger"
    type="text"
    name="3"
    required
    onChange={e => setTemp({...temp, text4: e.target.value})}
    value={temp.text4}
  />
  <input name="qsy" onChange={handleChange} type="radio" />
  <br />
  <br/>
  <button className="btn btn-warning"onClick={addAnswer,changeHiddenForm}>Mandar</button>
  <br/>
  <br/>
  </div>
  </div>

  <div id="random" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

  <div className="text-bg-dark"> <svg></svg></div>


  <div id="db" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

  <div className="text-bg-dark"> <svg></svg></div>

  <div id="ingles" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

  <div className="text-bg-dark"> <svg></svg></div>

  <div id="ajedrez" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

  <div className="text-bg-dark text-center"> <svg></svg></div>

  <div id="matematicas" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

  <div className="text-bg-dark"> <svg></svg></div>

  <div id="historiarg" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

  <div className="text-bg-dark"> <svg></svg></div>

  <div id="marvel" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>


      </form>
    </div>
  );
};

export default Form;
