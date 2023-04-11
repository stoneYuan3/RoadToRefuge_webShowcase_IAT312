
const titles={
    s1: "S1: Title & Basic Info",
    s2: "S2: Razor",
    s3: "S3: Slogan",
    s4: "S4: Vision Statement",

    s8: "S8 Why It is Innovative",
    s9: "S9 Introduction",
    s10: "S10 Narrative/Story ",
    s11: "S11 Game Mechanics",
    s12: "S12 Play matrix",
    s13: "S13 Rule Sheet "
}

const GddNav = () => {
    return (
    <div className="flex nav_gddToc">
        <div className="flex flex-full flex-column nav_gddToc_body">
            <h3>Table of Contents</h3>
            <ul>
                <li>
                    <a href="#s1">{titles.s1}</a>
                </li>
                <li>
                    <a href="#s2">{titles.s2}</a>
                </li>
                <li>
                    <a href="#s3">{titles.s3}</a>
                </li>
                <li>
                    <a href="#s4">{titles.s4}</a>
                </li>

                <li>
                    <a href="#s8">{titles.s8}</a>
                </li>
                <li>
                    <a href="#s9">{titles.s9}</a>
                </li>
                <li>
                    <a href="#s10">{titles.s10}</a>
                </li>
                <li>
                    <a href="#s11">{titles.s11}</a>
                </li>
                <li>
                    <a href="#s12">{titles.s12}</a>
                </li>
                <li>
                    <a href="#s13">{titles.s13}</a>
                </li>
            </ul>
        </div>
    </div>
    );
}

const GddMain = () => {
    return (
        <div className="flex flex-full flex-column section_article_2column">
            <h1>Game Design Document</h1>
            <h2 id="s1">{titles.s1}</h2>
            <p><strong>Title: </strong>Road to Refuge</p>
            <p><strong>Player: </strong>4 Players</p>
            <p><strong>Length: </strong>30+ Minutes</p>
            <p><strong>Age: </strong>13+ years</p>

            <h2 id="s2">{titles.s2}</h2>
            <p>A game that tells a story of a family that’s escaping from their country where they need to collect, and manage their resources while trying to survive through events that will challenge their teamwork.</p>

            <h2 id="s3">{titles.s3}</h2>
            <p>Follow and experience the journey of a family as they try to survive and escape their war-torn country.</p>
            <h2 id="s4">{titles.s4}</h2>
            <p><em>Road to Refuge</em> is a narrative game that lets players assume the role of a family escaping war. Players must cooperate together to manage their resources and survive through random events that will challenge their teamwork. The road to safety is not an easy path, players must traverse their war-torn country. Work together as a team on your road to refuge and a better life.</p>

            <h2 id="s8">{titles.s8}</h2>
            <h3>Innovation</h3>
            <p>
            The project features a shared resource system where the entire group is required to collect a resource called story cards. These cards are used at checkpoints throughout the board, where all players have to stop at the checkpoint and can only continue if the entire group has a specific amount of story cards. Another way players can share resources is sharing their shop items. If a player is running low on energy, another player can give their resources such as food to replenish their energy.</p>
            <p>
            This leads to great people fun opportunities as players in this case are encouraged to talk with other players to strategize around when it is necessary to land on a story tile or if someone needs to buy food to keep another player alive. This also leads to potential dilemmas where players may need to sacrifice their own interest to help other players who might be in more urgent need. 
            </p>

            <h3>Relevance</h3>
            <p>
            Our game is relevant because there are ongoing war crises between nations such as the Russian invasion in Ukraine that is still happening and many innocent Ukraininas have seeked asylum in Canada and other countries. Players will feel emotionally connected to the game when they are playing as a refugee member and experience what they may potentially go through. 
            </p>
            <p>
            This has potential to provide meaningful and desirable experience users in several ways:
            </p>
            <p>
            <strong>Raise awareness</strong> as the game has the power to educate and raise awareness about the issues and could help players understand the challenges that refugees face and the difficulties they encounter along the way.This has potential to provide meaningful and desirable experience users in several ways:
            </p>
            <p>
            <strong>Foster Empathy:</strong> By putting players in the shoes of a refugee, the game can foster empathy and encourage players to see the world from a different perspective and also break down the barriers and stereotypes
            </p>
            <p>
            <strong>Provide a platform for discussion:</strong> After playing the game, players may discuss the issues raised and explore different viewpoints and it would be a safe space for open dialogue and learning, and help players to engage more deeply with the topic. 
            </p>

            <h3>Selling Points</h3>
            <p>
            The shared resources mechanism makes the game a fun social game that could be used for friends to enjoy together or for people to know each other better as they are required to collaborate on the distribution of resources. The game would work well in both casual friend meetings, ice breaker activities and educational settings where groups of students may play it together in classes that talk about the brutality of war.  
            </p>
            <p>
            The story cards which reveal a unique story about the character and it promotes empathy and understanding as it encourages the players to put themselves in the shoes of refugees and understand their struggle and journey which can help promote empathy and understanding towards the global issue. It is also a interactive storytelling which allows the players to connect with the characters and their stories.
            </p>

            <h2 id="s9">{titles.s9}</h2>

            <h3>Premise & Theme</h3>
            <p>War, survive, escape, resource management</p>
            <h3>Setting</h3>
            <p>The game takes place in a war torn country and people are fleeing their hometown to safety. </p>

            <h3>Game Objective</h3>
            <p>Play as war refugees, travel to a safe place while trying to stay alive by countering risks and managing resources</p>
            <h3>Core Gameplay</h3>
            <p>The core gameplay includes: </p>
            <p>
            <strong>Movement:</strong> Players roll a dice to determine how many tiles they can move. The tile they land on determines the event that happens.
            </p>

            <p>
            <strong>Resources:</strong> Resources are important to survive in this game. There are energy points that are required to move and money that is required to purchase items from the store. The items in the store replenish energy and cure illness, injury, and anxiety.
            </p>
            <p>
            <strong>Events:</strong> Upon landing on an event tile, you pull an event card which can give players a negative effect (illness, injury, or anxiety) or it can give players energy and money.
            </p>
            <p>
            <strong>Checkpoints and Story cards:</strong> Story cards tell stories about each character in the game. There are checkpoints tiles in the game where it is required for the group of players to have a certain amount of story cards in order to proceed.
            </p>
            <figure>
                <img src="/img/gdd/gameBoard2.png" alt="game board" />
            </figure>

            <h3>Unique Elements</h3>
            <p>The game gives players the option to share resources amongst themselves, including shop items, story cards, and movement. This allows interaction and collaborations between the players. The game also features background stories for each character and mechanisms that allow them to gradually reveal the stories of characters.</p>


            <h2 id="s10">{titles.s10}</h2>
            <p>The story begins after the second invasion hits the country and people are finding their way out of the war zone to seek asylum. 2 different families, both with the same goal, accidentally meet as they are fighting to escape and get out.&nbsp;</p>
            <p>Sarah and Emma are both sisters who only have each other to lean on. They lost their mother when a missile hit the house during the first invasion of the war. Their dad, who was angry, wanted to fight in the front line to fight the invaders to protect his country and the people he loves. Sarah wanted to stay and begged Emma to wait for their father so they could give him a family to come back to. Sarah lost her mother at a young age, and refused to lose any more of her family. Weeks after the first invasion passed by, the food ran out, and they were starved until someone offered Emma supplies of food. It goes on for a while and she was grateful, until the same man who had gotten her and her sister out of starvation sexually assaulted her. Not long after, they received a letter from their father who rushed them to leave upon hearing the news of a second invasion. However, as the letter provided no context about another invasion, the sisters refused to leave. That is when the second attack finally hits their country. Emma, who has suffered deeply from loss, war, and rape, at the young age of 18, now has to fight and is determined to find a safer life for Sarah. </p>
            <p>Anna is a pregnant mother in her second trimester, who lost her daughter in the initial invasion of the war. It left their family shattered and Anna couldn’t deal with the loss. Her husband couldn’t leave while the country was under martial law and Anna was scared to escape without him while bringing their 8 years old son, Alex, along. That is until the second invasion hit and Anna’s husband persuaded her to escape. Anna who was still grieving forced herself to get up and pack her bag. She had no chance to bury the body of her daughter and she still suffers greatly. But she knows that she wouldn’t be able to cope and survive if she lost another one of her children to this war.</p>
            <p>Brought by destiny, Sarah, Emma, Anna, and Alex met while being on their way to escape. With their own stories, flaws, and limitations, they can now help and lean on each other to find their way to a safer place.</p>

            <h2 id="s11">{titles.s11}</h2>
            <figure>
                <img src="/img/gdd/gameMechanics2.png" alt="game board with legends and mechanic descriptions" />
            </figure>
            <p>Image above shows our latest game map board. The game is meant to be played with specifically 4 players, one for each character in the game. Road to Refuge is meant for players who enjoy cooperation while also wanting to learn a bit more about the refugee crisis or some struggles refugees face that may not be well known.&nbsp;</p>
            <p>The game is like a journey or a story, and the goal is to progress from the starting tile to the end with everyone alive. Players will face challenges along the way, such as managing energy and acquiring negative effects from event tiles, and meeting checkpoints. Most challenges come in types of tiles on the board. The random event tile can give players negative effects such as illness, injury, and anxiety. The campfire tile will give players story cards, which will be required to pass checkpoint tiles. Money tiles give you money to spend on the shop tiles. The shop includes items such as food to replenish energy and treatments to the three negative effects.</p>
            <p>Players move by rolling a 4-sided die, if players roll 1-3, they move the amount they rolled. If players roll a 0, they have to stay on their current tile. Players can choose exactly how much they move. For example, if a player rolls a 3, they can move up to 3 tiles, meaning they can choose to only move 1 tile if they wish.</p>
            <p>This is a team game, so many resources are shared. All shop items can be gifted to other players. Movement also be gifted to other players. Gifted movement is one tile less effective. For example, if one player rolls a 0, they cannot move, but another player who rolled a 3 can give their roll and the player who rolled a 0 can now move 2 tiles. Story cards are also shared among the entire group. For the first checkpoint, only one person needs to have an Anna or Alex story card for the entire group to pass.</p>
            <p>Players win when they reach the end with all members alive.</p>

            <h2 id="s12">{titles.s12}</h2>
            <figure>
                <img src="/img/gdd/playMatrix.png" alt="play matrix diagram" />
            </figure>
            <p>The game is more skill oriented as players need to carefully manage their resources and choose the right time to share resources with other players in order to survive. However, some element of chance is also involved as players are affected by positive or negative random events in the game.</p>
            
            <h2 id="s13">{titles.s13}</h2>
            <p>Submitted as PDF, can also be accessed at:</p>
            <a className="link-intext" href="https://drive.google.com/drive/u/1/folders/1HWVz8youGVTUycrl3r3-_ZmHLcPEzwIr ">Google Drive Link</a>

        </div>
    );
}

const Gdd = () => {
    return(
        <>  
            <div className="flex section_2column_master flex-full">
                <GddNav />
                <GddMain />
            </div>
        </>
    );
}

export default Gdd;