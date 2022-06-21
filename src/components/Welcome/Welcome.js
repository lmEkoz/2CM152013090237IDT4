import React from "react";
import './Welcome.css';
import '../components/Title/Title.css';
import Title from "../components/Title/Title";
import BasicTable from '../components/Table/BasicTable'


function Welcome() {
  return (
    <div className="welcome-container">

      <div>
        <div className="rigth-align">
          <a href="">Salir de la aplicación web</a>
        </div>
        <div>
          <Title text='Welcome' />
        </div>
        <div className="title-container">
          <Title text='CREAR, ALTAS, BAJAS Y CAMBIOS DE EJERCICIOS' />
        </div>
        <div>
          <a href=''>Crear un nuevo ejercicio</a>
        </div>
        <div className="table-content">
          <BasicTable></BasicTable>
        </div>
      </div>


    </div>
  );
}

export default Welcome;