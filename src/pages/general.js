
export const Home = () => {
    return (
      <div className="flex flex-column section_article">
        <p className="p_intro">A tabletop game build for Spring 2023 IAT312 Foundations of Game Design, part of the fabulous Simon Fraser University School of Interactive Arts and Technology.</p>

        <figure id="poster">
            <img src="/img/poster.jpg" alt="game poster" />
            <figcaption>Poster!</figcaption>
        </figure>

        <p>More Contents Coming!</p>
      </div>
    );
  }


  
export const Members = () => {
    return (
      <div className="flex flex-column section_article">
        <h1>Members & Roles</h1>
        <ul className="section_memberList">
            <li>
                <strong>Pocholo Andres</strong>
                <p>Idea Contribution, Early Prototyping in Figma, Playtest</p>
            </li>
            <li>
                <strong>Adrian Fung</strong>
                <p>Idea Contribution, Early Prototyping in Figma, Playtest</p>
            </li>
            <li>
                <strong>Maya Ramadhina</strong>
                <p>Idea Contribution, Early Prototyping in Figma, Playtest</p>
            </li>     
            <li>
                <strong>James Yoo</strong>
                <p>Idea Contribution, Playtest</p>
            </li>
            <li>
                <strong>Jack Yuan</strong>
                <p>Idea Contribution, Playtest, Final product in Tabletop Simulator, Website</p>
            </li>      
        </ul>
      </div>
    );
}