"use client";

import React, { useState, useEffect } from 'react';
import { Stack,Button,Card,CardText } from 'react-bootstrap';
import axios from 'axios';
import MovieCard from "./MovieCard";
import MovieForms from "./MovieForms";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieSlide from './MovieSlider';

export default function Home() {
  
  return (
    <div  className="container">
    <div className="row text-center">
       <div className="col-md-12">
                  
                      <h1 style={{ fontSize: "24px", color: "blue" }}>Home Movie List</h1>
                      <h2 style={{ fontSize: "20px", color: "green" }}>Abdul ridho syarozy</h2>
                      <h3 style={{ fontSize: "16px", color: "red" }}>Kelas Pemrograman Web 2023-2024</h3>

                    
          </div>
      </div>
      <div className="row">
      <div>
        <br/>
          <MovieForms />
<br/>
          </div>
      </div>
  <div className='bg-danger' >
        <MovieCard/>
        </div>
        <div>

        <MovieSlide/>
        </div>
         </div>
  );
}
