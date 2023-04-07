
export const Home = () => {
    return (
      <div className="flex flex-column section_article">
        <p className="p_intro">A tabletop game build for Spring 2023 IAT312 Foundations of Game Design, part of the fabulous Simon Fraser University School of Interactive Arts and Technology.</p>

        <h2>Poster</h2>
        <figure id="poster">
            <img src="/img/poster.jpg" alt="game poster" />
        </figure>

        <h2>Trailer</h2>
        <div className="section-vidBox">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hmVrkuYbksY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

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
                <p>Idea Contribution, Early Prototyping in Figma, Playtest, Video Voiceover</p>
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
                <p>Final product in Tabletop Simulator, Website & Poster & Video,Idea Contribution, Playtest</p>
            </li>      
        </ul>
      </div>
    );
}