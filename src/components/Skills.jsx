import SkillCard from "./SkillCard";
import "../assets/css/Skills.css";
import "../assets/css/Media-Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <header>
        <h2>Skills</h2>
      </header>
      <main>
        <div className="hard-skills">
          <SkillCard technology={"html"}></SkillCard>
          <SkillCard technology={"css"}></SkillCard>
          <SkillCard technology={"javascript"}></SkillCard>
          <SkillCard technology={"react"}></SkillCard>
          <SkillCard technology={"python"}></SkillCard>
          <SkillCard technology={"git"}></SkillCard>
          <SkillCard technology={"github"}></SkillCard>
          <SkillCard technology={"mysql"}></SkillCard>
          <SkillCard technology={"english"}></SkillCard>
        </div>
        <div className="soft-skills">
          <header>
            <h3>Soft Skills</h3>
          </header>
          <div>
            <ul>
              <li>Team Work</li>
              <li>Comunication</li>
              <li>Fast Learning</li>
              <li>Adaptability</li>
              <li>Curiosity</li>
              <li>Problem solving</li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;
