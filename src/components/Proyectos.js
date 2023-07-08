import React, { useState } from "react";
import "../css/Proyectos.css";
import televisiva1 from "../assets/televisiva1.jpg";
import televisiva2 from "../assets/televisiva2.jpg";
import televisiva3 from "../assets/televisiva3.jpg";
import balde1 from "../assets/balde-arrastre.jpg";
import agua from "../assets/agua.jpg";
import robert from "../assets/robert.jpg";
import foto7 from "../assets/foto7.jpg";
import foto8 from "../assets/foto8.jpg";
import foto9 from "../assets/foto9.jpg";
import { Container } from "react-bootstrap";
export const Proyectos = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const renderProjects = () => {
    // Lógica para filtrar y mostrar los proyectos según activeFilter
    // Puedes reemplazar este ejemplo con tu propio contenido de proyectos
    if (activeFilter === "all") {
      return (
        <div className="projects-grid">
          <div className="project-item">
            
            <p>Servicio de inspeccion televisiva en nueva rinconada</p>
            <br></br>
            <img src={televisiva1} alt="televisiva1"></img>
         
          </div>
          <div className="project-item">
            
            <p>Mantenimiento Preventivo de Colectores de Alcantarillado Zona Sur</p>
            <img src={televisiva2} alt="televisiva2"></img>
          
          </div>
          <div className="project-item">
           
            <p>Servicio de Inspección Televisiva, Evaluación Chorrillos</p>
            <br></br>

            <img src={televisiva3} alt="televisiva3"></img>
          </div>
          <div className="project-item">
          
            <p>Limpieza y mantenimiento con máquina de balde tipo arrastre para red de alcantarillado L2</p>
            <br></br>

            <img src={balde1} alt="televisiva3"></img>
          </div>
          <div className="project-item">
           
            <p>Ampliación y Mejoramiento del sistema de agua potable y alcantarillado – Juliaca</p>
            <br></br>

            <img src={agua} alt="televisiva3"></img>
          </div>
          <div className="project-item">
            
            <p>Mejoramiento y Ampliación del Sistema de Agua Potable, Alcantarillado y Planta de Tratamiento de Aguas Residuales Pucallpa</p>
            <img src={robert} alt="televisiva3"></img>
          </div>
          <div className="project-item">
            
            <p>Intervención en la Estación El Olivar E-5 y Estación Quilca E-6</p>
            <img src={foto7} alt="televisiva3"></img>
          </div>
          <div className="project-item">
            
            <p>Rehabilitación de redes secundarias de agua potable y alcantarillado</p>
            <img src={foto8} alt="televisiva3"></img>
          </div>
          <div className="project-item">
            
            <p>Ampliación y Mejoramiento del sistema de alcantarillado y planta de tratamiento de aguas residuales – Tacna</p>
            <img src={foto9} alt="televisiva3"></img>
          </div>

        </div>
      );
    } else if (activeFilter === "repairs") {
      return (
        <div>
          <h3>Repair Projects</h3>
          <p>Proyecto de reparación 1</p>
          <p>Proyecto de reparación 2</p>
          <p>Proyecto de reparación 3</p>
        </div>
      );
    } else {
      return (
        <div>
          <h3>All Projects</h3>
          <p>Proyecto 1</p>
          <p>Proyecto 2</p>
          <p>Proyecto 3</p>
        </div>
      );
    }
  };

  return (
    <div className="proyect">
    <Container>
    <div className="proyectos" id="proyectos">
      <h2>Nuestros Proyectos</h2>
      <br></br>
      <br></br>

      <div className="filter-buttons">
        {/*<button
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => handleFilterClick("all")}
        >
         Nuestros Proyectos
        </button>
  */}
        <br></br>

       
       {/*
        <button
          className={activeFilter === "remodeling" ? "active" : ""}
          onClick={() => handleFilterClick("remodeling")}
        >
          Remodeling
        </button>
  */}


       { /*
        <button
          className={activeFilter === "repairs" ? "active" : ""}
          onClick={() => handleFilterClick("repairs")}
        >
          Repairs
  </button>*/}
      </div>
      {renderProjects()}
    </div>
    </Container>
    </div>
  );
};
