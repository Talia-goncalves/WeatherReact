import React from "react";
import "./Search.css";

//REACT HOOKS - Memoriza os estados
import { useState } from "react";

const APIkey = '63b5654d588424e471733bb8c02321b6';

function Search() {
  //lógica
  const [valor, setValor] = useState('')
  const [cidade, setCidade] = useState('')

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIkey}`

  const pegaInput = (evento) =>{
    setValor(evento.target.value)
  }

  const pesquisar = () =>{
    setValor(valor)
    setCidade(valor)
    request()
  }

  const request = () =>{
    //gerar requisição ára o OpenWeather API e ver o que ele trouxe

    fetch(url).then(res => res.json()).then((json) =>{
      console.log(json)
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className="SearchContainer">
      <span>
        <input type="text" className="SearchInput" onChange={pegaInput} value={valor}></input>
        <input type="button" className="SearchButton" onClick={pesquisar} value={"Buscar"}></input>
      </span>
    </div>
  );
}

export default Search;
