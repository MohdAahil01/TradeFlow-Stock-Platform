import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className=" text-center mt-3">People</h1>
      </div>

      <div
        className="row p-3  text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/aahil.png"
            style={{ width: "50%", height: "285px", borderRadius: "100%" }}
          />
          <h4 className="mt-3">Mohd Aahiluddin Shaikh</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
        <p>Aahil is a tech enthusiast driven by curiosity and a love for building things that matter. His journey began with experimenting on small projects, eventually evolving into full-stack applications that solve real-world problems.</p>

        <p>He’s actively involved in tech and social initiatives, having volunteered at Kartavya NGO and served as an editor for his college’s Tech-Hub.</p>

        <p>Playing around with code is his zen.</p>

        <p>Connect on <a className="textnone" href="https://github.com/MohdAahil01">GitHub </a>/ <a href="kedin.com/in/aahiluddinshaikh/" className="textnone">LinkedIn </a>/ <a href="r-project-duug.onrender.com/listings" className="textnone">Wanderlust</a></p>

        </div>
      </div>
    </div>
  );
}

export default Team;
