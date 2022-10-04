import "../component/Home.css";

const Home = ({ isActive }) => {
  return (
    <div className={isActive ? "App-lightTheme" : "App"}>
      <div className="Header">
        <h2 className="title"> </h2>
      </div>
      <div className="PersonInfo">
        <div>Long Guan</div>
        <div>4372201965</div>
        <div>45 scoville square</div>
        <div>Scarborough</div>
        <div>ONTARIO M1V 5L9</div>
      </div>

      <div className="Skills">
        Skills
        <ul>
          <li>Language: C, C++, C#, Python, Java, Javascript, React.</li>
          <li>
            Ability: Soldering, Code running and interacting with hardware, Code
            debugging, Knowing how to build custom styles themes.
          </li>
          <li>
            Tool: Visual Studio 2022. VSCode, Putty, Raspberry PI, Eclipse
          </li>
          <li>Soft Skill: Patient, Responsible, Willing to learn.</li>
        </ul>
      </div>
      <div className="Experience">
        Experience
        <div className="MainContent">
          <h1>Sushi Maker, Sakura Garden</h1>
          <br /> <h4>July 2019 to January 2020, North York, Ontario</h4>
          <ul>
            <li>Started learning to make sushi and rolls.</li>
            <li>Self-learning front-end programming languages.</li>
            <br />
          </ul>
          <h4>January 2020 to July 2022, North York, Ontario</h4>
          <ul>
            <li>
              Created small application for the business to better manage their
              inventory.
            </li>
            <li>Created custom theme using CSS, bootstrap, material ui.</li>
            <li>Made rolls and sushi for customers.</li>
          </ul>
        </div>
      </div>
      <div className="Education">
        Education
        <div className="MainContent">
          June 2024 Seneca College Newnham, ONTARIO Diploma Computer Engineering
          Technology
        </div>
      </div>

      <div className="Language">
        Language
        <div className="MainContent">
          <h3>Chinese - Native</h3>
          <h3>English - Fluent</h3>
        </div>
        <div className="Projects">Projects</div>
      </div>
    </div>
  );
};

export default Home;
