import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <ul className="projects-list">

        <li>
          <a href="https://bit.ly/invoicemax"><b>InvoiceMax</b></a>
          <p>Comprehensive invoicing application using React.</p>
        </li>
        <li>
          <a href="https://rebrand.ly/tailors-log"><b>My Tailor's Logbook</b></a>
          <p>This app is an essential tool for accurately recording client measurements, tracking key details, and ensuring precise fittings and timely delivery.</p>
        </li>
        <li>
          <a href="https://thollarkings.github.io/ejtos-react_budget_app/"><b>Budget App</b></a>
          <p>User-friendly budget management tool with React. This app is an essential tool for accurately recording client measurements, tracking key details,<br/> and ensuring precise fittings and timely delivery.</p>
        </li>
        <li><a href="https://thollarkings.github.io/Tollars-Calculator/"><b>Kings-Calc</b></a>
        <p>This app is a Simplest Working Calculator designed with React. Its primary goal is to provide basic arithmetic operations and allow users to interact with a clean, user-friendly interface.</p>
        </li>
        <li><a href="https://thollarkings.github.io/Tailors_Log_Book/"><b>Tailor's Log</b></a>
        <p> This application serves as a measurement tracking tool, similar to the My Tailor's Logbook app, this was developed using plain vanilla JavaScript.</p>
        </li>
        <div>                 
          
        </div>
        </ul>
    </div>
  );
}

export default Projects;