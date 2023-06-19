import React, { Component, useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//import {  } from "react";


//import { Link } from "react-router-dom";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo4.jpg";
import dnc from "../assets/dnc.jpg"
//<img src={logo2} alt='logo'/>




export const Navigation =()=>{

    const [activeLink, setActiveLink]=useState('home');
    const [scrolled,seScrolled]=useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);

            }

        }
        window.addEventListener('scroll',onScroll);
        return ()=>window.removeEventListener('scroll',onScroll);
    },[])
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    
    }


    return (
        
          <Navbar expand='lg' className={scrolled?'scrolled':''}>
            <Container>
              <Navbar.Brand href="#home">
                <img src={dnc} alt='Logo'/>
              </Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Inicio</Nav.Link>
                <Nav.Link href="#nosotros" className={activeLink==='nosotros'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('nosotros')}>Nosotros</Nav.Link>
                <Nav.Link href="#servicios" className={activeLink==='servicios'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('servicios')}>Servicios</Nav.Link>
                <Nav.Link href="#proyectos" className={activeLink==='proyectos'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('proyectos')}>Proyectos</Nav.Link>
                <Nav.Link href="#footer" className={activeLink==='contactanos'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('contactanos')}>Contactanos</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        
      );
    }




