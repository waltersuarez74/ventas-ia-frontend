import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cliente, setCliente] = useState("");
  const [resultado, setResultado] = useState("");

  const evaluarCliente = async () => {
    if (!cliente) return;
    try {
      const response = await axios.get(`https://ventas-ia-backend.azurewebsites.net/evaluar_cliente/${cliente}`);
      setResultado(response.data.evaluacion);
    } catch (error) {
      setResultado("Error al consultar");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Evaluación de Crédito</h1>
      <input type="text" className="form-control mb-3" value={cliente} onChange={(e) => setCliente(e.target.value)} />
      <button className="btn btn-primary w-100" onClick={evaluarCliente}>Evaluar</button>
      {resultado && <div className="alert alert-info mt-3">{resultado}</div>}
    </div>
  );
}

export default App;
