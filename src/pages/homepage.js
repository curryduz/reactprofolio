function Homepage() {
  return (
    <>
      <header>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className=" display-4">
              <a href="">Thomas Curry's Portfolio</a>
            </h1>
            <p className="lead"> Find your next big thing.</p>
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#work-experience">Experience</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="employer-form">
          <h3>Hire Me Today</h3>
          <p>Fill out this form and I will send you my availability</p>
          <form>
            <label for="name">Enter full name:</label>
            <input type="text" placeholder="Your Name" name="name" id="name" />
            <label for="email">Enter email address:</label>
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              id="email"
            />
            <label for="phone">Enter a telephone number:</label>
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              id="phone"
            />
            <p>
              Do my projects interest you?
              <input type="radio" name="interest-confirm" id="interest-yes" />
              <label for="interest-yes">Yes</label>
              <input type="radio" name="interest-confirm" id="interest-no" />
              <label for="interest-no">No</label>
            </p>

            <p>
              <label for="checkbox">
                I acknowledge that I am a legit employer.
              </label>
              <input type="checkbox" name="employer-confirm" id="checkbox" />
            </p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section id="about-me" className="about-me intro">
        <h2>About Me</h2>
        <p>
          <br />
          Hello, I'm Thomas
          <br />{" "}
        </p>

        <p>
          I would like to give you some insight in who I am in regard to my my
          education background, work experience and current projects that I have
          or had worked in the past and present. I'm an Austin native born and
          raised in Texas. I enjoy learning langugaes and problem solving in
          regard to anything that hasnt yet been fixed or has some type of
          solution needed in oreder to fix. I am a polyglot in which is a person
          who knows more than 3 langugaes. Those langugaes being Spanish,
          French, Portuguese and Mandarin. I have self-taught myself this
          languges through studying abroad and reading key information in order
          to comprend such diversity in culture and phonetics.
        </p>

        <p>
          I am currently learning my 6th langugaes which is programming so I
          guess you say given the time that I have accomplished to conquer full
          stack developement i'd know about 10 to 12 langugaes. I enjoy helping
          others and I tend to give my all in doing so that others reach their
          goals. I also am I prior collegiate athlete who has play at Tarleton
          State University and Southeastern Oklahoma State University with a B.S
          degree in Behavioral Science and a Minor in Spanish. I am currently
          enrolled at Texas A&M University- Commerce as a M.A major in Applied
          Linguistics.
        </p>
      </section>

      <section id="about-me" className="about-me intro">
        <h2>Work</h2>
        <div className="row">
          <div className="col">
            <div
              className="work-grid-item box1"
              onclick="window.location='https://github.com/Martha121/choose-and-chill.git/';"
            ></div>

            <img
              src="./assets/images/workmain.jpg"
              alt="Image of a glipse of what canidate work looks like"
            />
          </div>
        </div>
      </section>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src="./assets/images/appleimage1.jpeg"
              className="card-img-top"
              alt="Picture of employers company at Apple"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src="./assets/images/choose&Chill.jpg"
              className="card-img-top"
              alt="Picture of AISD job"
            />
            <div className="card-body">
              <h5 className="card-title">Choose & Chill</h5>
              <p
                className="work-item"
                onclick="window.location='https://github.com/Martha121/choose-and-chill.git/';"
              >
                <a href="https://github.com/Martha121/choose-and-chill.git/">
                  Choose & Chill App
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src="./assets/images/visaimage.jpg"
              className="card-img-top"
              alt="Picture of Visa employer"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="./assets/images/happygoal1.jpeg"
              className="card-img-top"
              alt="Picture of Happy Goal employer"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="resume" className="form">
        <h2>Resume</h2>
        <a href="./assets/resume/tcresume.pdf">Resume</a>
      </section>

      <div id="contact">
        <h3>Email Adress</h3>
      </div>

      <footer>
        <h2>Made by greatness Advantage Point.</h2>
        <div>
          <a href="#">Read Our Privacy Policy</a>
          <br />
          &copy; 2020 Advantage Point, Inc.
        </div>
      </footer>
    </>
  );
}

export default Homepage;
