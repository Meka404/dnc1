import React, { useState } from "react";
import "../css/Proyectos.css";
import televisiva1 from "../assets/televisiva1.jpg";
import televisiva2 from "../assets/televisiva2.jpg";
import televisiva3 from "../assets/televisiva3.jpg";
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
            <img src={televisiva1} alt="televisiva1"></img>
         
          </div>
          <div className="project-item">
            
            <p>Mantenimiento Preventivo de Colectores de Alcantarillado Zona Sur</p>
            <img src={televisiva2} alt="televisiva2"></img>
          
          </div>
          <div className="project-item">
           
            <p>Servicio de Inspección Televisiva, Evaluación Chorrillos</p>
            <img src={televisiva3} alt="televisiva3"></img>
          </div>
          <div className="project-item">
           
            <p>Limpieza y mantenimiento con máquina de balde tipo arrastre para red de alcantarillado L2</p>
          </div>
          <div className="project-item">
           
            <p>Ampliación y Mejoramiento del sistema de agua potable y alcantarillado – Juliaca</p>
          </div>
          <div className="project-item">
            
            <p>Mejoramiento y Ampliación del Sistema de Agua Potable, Alcantarillado y Planta de Tratamiento de Aguas Residuales Pucallpa</p>
          </div>
          <div className="project-item">
            
            <p>Intervención en la Estación El Olivar E-5 y Estación Quilca E-6</p>
          </div>
          <div className="project-item">
            
            <p>Rehabilitación de redes secundarias de agua potable y alcantarillado</p>
          </div>
          <div className="project-item">
            
            <p>Ampliación y Mejoramiento del sistema de alcantarillado y planta de tratamiento de aguas residuales – Tacna</p>
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
    <Container>
    <div className="proyectos" id="proyectos">
      <h2>Nuestros Proyectos</h2>
      <br></br>
      <br></br>
      <div className="filter-buttons">
        <button
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => handleFilterClick("all")}
        >
          Todos nuestros proyectos
        </button>
        <button
          className={activeFilter === "remodeling" ? "active" : ""}
          onClick={() => handleFilterClick("remodeling")}
        >
          Remodeling
        </button>
        <button
          className={activeFilter === "repairs" ? "active" : ""}
          onClick={() => handleFilterClick("repairs")}
        >
          Repairs
        </button>
      </div>
      {renderProjects()}
    </div>
    </Container>
  );
};
