import React from "react";
import { Link } from "react-router-dom";
import CV from "../sources/YaoLuCV.pdf";
import Progressbar from "./Progressbar";

function Home() {
  return (
    <>
      <section className="hero-head-container">
        <div className="circle-container"></div>

        <div className="horizontal-line"></div>
      </section>
      <section className="hero-text-container">
        <h1>Welcome to my website</h1>
        <br />
        <h2>This project is still under development</h2>
        <br />
        <h2>Tämä projecti on vielä työn alla</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          aliquam amet ea deleniti saepe, iusto exercitationem rerum quidem
          tempora optio impedit repudiandae doloremque quia est fugit possimus
          similique blanditiis laudantium esse. Inventore mollitia quo,
          molestiae et saepe, consequatur quisquam optio, quia voluptas ipsa
          blanditiis quam ipsam quas! Deserunt voluptas, nemo ipsum quos tempora
          molestias fugiat cum mollitia deleniti corporis nobis! Quae libero
          autem earum voluptatibus nihil, quod dolorem eaque tenetur sunt
          perspiciatis a consectetur soluta unde voluptates quibusdam, sapiente
          dolorum commodi hic maxime? Culpa eum suscipit dolores nam deserunt
          consequuntur, natus animi, ducimus, officiis consectetur itaque
          distinctio minima eos voluptate!
        </p>
      </section>
      <section className="hero-button-container">
        <button className="CV-download-btn">
          <a href={CV} download="YaoLuCV.pdf">
            <h1>Download CV</h1>
          </a>
        </button>
      </section>
      <div className="blank-space"></div>
      <Progressbar
        skill="React.js"
        skillColor="pink"
        score={70}
        duration={2000}
        bgcolor1="rgb(66, 197, 245,0.3)"
        bgcolor2="rgb(201, 125, 245,0.8)"
      />
      <Progressbar
        skill="React.js"
        skillColor="pink"
        score={70}
        duration={2000}
        bgcolor1="rgb(66, 197, 245,0.3)"
        bgcolor2="rgb(201, 125, 245,0.8)"
      />
      <Progressbar
        skill="React.js"
        skillColor="pink"
        score={70}
        duration={2000}
        bgcolor1="rgb(66, 197, 245,0.3)"
        bgcolor2="rgb(201, 125, 245,0.8)"
      />
      <Progressbar
        skill="React.js"
        skillColor="pink"
        score={70}
        duration={2000}
        bgcolor1="rgb(66, 197, 245,0.3)"
        bgcolor2="rgb(201, 125, 245,0.8)"
      />
      <Progressbar
        skill="React.js"
        skillColor="pink"
        score={70}
        duration={2000}
        bgcolor1="rgb(66, 197, 245,0.3)"
        bgcolor2="rgb(201, 125, 245,0.8)"
      />
    </>
  );
}

export default Home;
