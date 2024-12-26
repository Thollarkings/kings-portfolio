import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div>
      <div className='myIntro'>
        <h1>Name: Oyeniyi Omotola</h1>
        <h2>Contact Information:</h2>
        <ul>
          <li>Phone: +234-8065970017, +234-9071333340</li>
          <li>Email: mediaxtreme1@gmail.com</li>
          <li>Address: Apartment 11B, Zone D, BCGA, off Queens School, Ibadan</li>
        </ul>
      </div>
      <div className='myProfSum'>
        <h2>Professional Summary:</h2>
        <p>Passionate front-end developer with 5+ years of experience in React and web development.<br />
          Skilled in building scalable, user-friendly applications.<br />
          Transitioned from agricultural research to pursue software development.<br />
          Seeking front-end role in forward-thinking IT company, particularly in SaaS or e-commerce.<br />
          Actively engaged in professional development and open-source projects, expanding skills to <br />become proficient backend developer and aspiring full-stack developer.</p>
        <h2>Work Experience:</h2>
        <ul>
          <li>Obafemi Awolowo University, Ile-Ife: Application Development (2014 - 2024)</li>
          <li>National Youth Service Corps (NYSC): Agricultural Science Teacher (2010 - 2011)</li>
          <li>Mediaxtreme (Self-employed): Professional Graphics Designer and General Purpose Printing (2012 - 2014)</li>
          <li>Tiens: Life and Health Coach (2011 - 2012)</li>
        </ul>

        <h2>Education:</h2>
        <ul>
          <li>M.Sc. in Plant Breeding, University of Ibadan, Nigeria (2017)</li>
          <li>Bachelor of Agriculture (Plant Breeding & Seed Technology), Federal University of Agriculture, Abeokuta, Nigeria (2010)</li>
        </ul>
      </div>
      <div className='mySkills'>
        <h2>Skills:</h2>
        <p>Technical Skills: HTML, CSS, JavaScript, React, Python, Node.js, Express, Git, GitHub, AWS, IBM Cloud, Figma</p>
        <p>Soft Skills: Problem-solving, teamwork, communication, project management, UI/UX, web design, graphic design</p>

        <h2>Certifications:</h2>
        <p>React Basics, Advanced React, Python for Data Science, AI & Development, Node.js and Express, Web Development with HTML, CSS, JavaScript, Cloud Computing</p>

        <h2>Projects:</h2>
        <ul>
          <li><strong>InvoiceMax:</strong> Comprehensive invoicing application using React</li>
          <li><strong>Budget App:</strong> User-friendly budget management tool with React</li>
          <li><strong>My Tailor's Logbook:</strong> This app is an essential tool for accurately recording client measurements, tracking key details, and ensuring precise fittings and timely delivery.</li>
          <li><strong>Kings-Calc:</strong> This app is a Simple Working Calculator designed with React. Its primary goal is to provide basic arithmetic operations and allow users to interact with a clean,<br /> user-friendly interface.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;