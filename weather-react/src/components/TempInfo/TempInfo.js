import React from "react";
import "./TempInfo.css";

function TempInfo() {
  return (
    <div className="TempContainer">
      <span>
        <div className="Cidade">
          <h1>Sorocaba</h1>
          <h1>19°C</h1>
        </div>

        <div className="Condicao">
          <p>Nublado</p>
          <h4>Vento: X km/h</h4>
          <h4>Umidade: Y%</h4>
        </div>
      </span>
    </div>
  );
}

export default TempInfo;
