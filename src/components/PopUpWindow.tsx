import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import windowsxpPng from "../assets/windowsxp.png";
import scoutingappPng from "../assets/scoutingapp.png";
import resizeWindowPng from "../assets/resize-window.png";
import expandingTextPng from "../assets/expanding-text.png";
import moveWindowPng from "../assets/move-window.png";
import hoverLinkPng from "../assets/hover-link.png";
import hoverButtonPng from "../assets/hover-button.png";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

interface Props {
  title: string;
  xpos: number;
  ypos: number;
  width: number;
  height: number;
  onClickCloseWindow: Function;
}

// This probably isn't a great way to do this, maybe I should have them all as their own individual modules?
const popupContent = new Map([
  [
    "Operating Standards Project",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/ultradagon.github.io"
        target="_blank"
        className="header-link"
      >
        View on GitHub!
      </a>
      <p className="left">
        <iframe
          src="https://www.youtube.com/embed/LV4iFOz3Xek"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        "Operating Standards Update" is a Google Apps Script program used to
        transfer data from meeting minutes taken on a Google Doc into a Google
        Sheet. I made it for my college fraternity, Lambda Chi Alpha. It saves
        roughly 15 hours of human labor a semester, and has had no bug
        encounters since its completion in spring 2024. During it's production,
        I would check in with the president and operating standards chair about
        once every two weeks to update them on it's progress.
      </p>
      <p>
        Operating Standards Update reads through a given Google Doc and writes
        to a given Google Sheet, filling in the information for the date on the
        doc. Currently it looks for bonus standards and merits. Bonus standards
        are points used to determine things like room pick, parking spaces,
        etc., and merits are used to ensure people are held accountable for
        their responsibilites.
      </p>
    </div>,
  ],
  [
    "Poppy's Scuttle Slugging",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/PoppysScuttleSlugging"
        target="_blank"
        className="header-link"
      >
        View on GitHub!
      </a>
      <p>
        "Poppy's Scuttle Slugging" is the name of a fan game I made over the
        summer of 2025. It was written with C++ using the SDL2 library for
        graphics, and was inspired by Riot Games's{" "}
        <a href="https://www.leagueoflegends.com/en-us/" target="_blank">
          League of Legends
        </a>{" "}
        and Juicy Beast's{" "}
        <a href="https://burritobison.com/" target="_blank">
          Burrito Bison
        </a>
        .
      </p>
      <p>
        Over the course of this project, I learned a lot and wanted to talk
        about the journey a bit.
      </p>
      <h1>Challenges</h1>
      <h3>Time management:</h3>
      <p>
        tl ; dr - I set myself a deadline. Through the use of shorter deadlines
        and tracking of remaining features, I made a demo that I was satisfied
        with. Given a similar situation, I would make a clear map of features
        and systems beforehand.
      </p>
      <p>
        I wanted to produce a working demo by September 1st. This goal had to be
        balanced along with working, helping my parents run their farm, and
        maintaining a social life.
      </p>
      <p>
        I initially paced myself while working on it, where the first month and
        a half I would make sure I pushed a feature every other day. This way, I
        would avoid burnout while figuring out a realistic set of features
        needed for the end product. I feel like this was a good decision, though
        when I take on another project like this, I think I'll try to fully
        design the demo before writing any of the code.
      </p>
      <p>
        After the first half, I had quite a few core features done, like the
        rendering, scene management, simple gameplay, etc. While I was working,
        I'd think to myself about what the features I really needed to get a
        functional demo out were. Once I got home, I'd put them into a
        spreadsheet so I could visualize everything that needed to be done. The
        spreadsheet contained about 30 features, though they were not equal in
        time required to implement each one.
      </p>
      <p>
        As I worked on these features, I'd set myself about a week's deadline to
        finish everything on the list. While I missed those smaller deadlines,
        it gave me the motivation to finish more than what was really needed,
        giving me more time to ensure the game was of a quality that I was happy
        with.
      </p>
      <p>
        In the end, I did have to scrap a few features from the demo, but I'd
        like to work on this more in the future whenever I have the time. As for
        time management, I feel like my system worked pretty well and I was able
        to be motivated to consistently work on the game without getting bored
        or burnt out. If I were to do this project again, I would definitely map
        out the features more clearly, likely using some sort of flow chart to
        map out the core gameplay features, the systems those features depend
        on, and then extra features depending on the core gameplay features.
      </p>
      <h3>Art:</h3>
      <p>
        tl ; dr - I have very little experience with art, and it was the most
        difficult part of this project. I felt like I was able to lower my
        standard of perfection a bit and learned how to create better digital
        art.
      </p>
      <p>
        Before this project, my experience with digital art amounted to a few
        environment sprites and a golf ball for a game jam that I did with some
        buddies last year. My experience with handmade art didn't go much past
        that, though I would say that I'm good at seeing and copying the lines I
        see on real objects.
      </p>
      <p>
        While it did scare me, I wanted to get better at art, so why not get
        better now? I didn't want to paint digitally, so I would split all
        sprites into many single-color layers, and then put lighting and shadows
        on their own layers at a lowered opacity.
      </p>
      <p>
        The first sprite I drew was the Scuttle Crab, and I thought it turned
        out pretty well, though I didn't super like the lighting on the shell.
        After that, I mainly worked on smaller sprites, as they weren't that
        scary to take on and I didn't feel like I had to make them perfect.{" "}
        <a href="https://modelviewer.lol/" target="_blank">
          Khada (LoL model viewer)
        </a>{" "}
        was my saving grace for referencing League models.
      </p>
      <p>
        On the other side of the coin is the sprite sheet that terrified me.
        Poppy. This piece would be seen every run, had 4 distinct frames, and
        had to be detailed. With how detailed this had to be, the perfectionist
        in me had to make sure it looked how I wanted, though I knew that I did
        not have the art fundamentals to make a proportionally correct body yet.
      </p>
      <p>
        After much longer than it should have taken, I was able to finish all of
        the art. If I had to do something like this again, I'd either hope that
        I had more experience, use free to use art, or commission someone else
        to make it. Making the art for this was definitely the most difficult
        part, as I felt like I never had the motivation for it, and I would more
        often than not make something not perfect (which I know is a bad bar,
        but I think I was able to lower it some).
      </p>
      <h3>Performance:</h3>
      <p>
        tl ; dr - I had slow fps midway into development. I was able to solve a
        problem without an obvious solution by making two caches instead of one,
        and as a result, I didn't have to worry about performance for the rest
        of development.
      </p>
      <p>
        In high school, I was used to making games with Python, so I had quite a
        few games running at 20fps average. I've seen what other people can do
        with C++, and knew I could make something that would have blown high
        school me away.
      </p>
      <p>
        At least that's what I thought. Pretty early on, I was dropping to 40fps
        while drawing 5-10 sprites onto the screen, with. If I were going to be
        drawing enemies and moving backgrounds, something had to change. I just
        had no idea what could have been causing these frame drops.
      </p>
      <p>
        For context on these next paragraphs, my understanding is that image
        files (png, jpeg, bmp, etc.) are opened and converted into SDL_Surface
        objects. Then, these SDL_Surfaces are converted into SDL_Textures, which
        are (apologies if I'm wrong) operating system dependent representations
        of the images, and require a pointer to the window used to display the
        pixels to the user. These SDL_Textures are then able to be transformed
        and placed anywhere on the window. It takes significant time for both of
        these conversions (image -{">"} SDL_Surface, SDL_Surface -{">"}{" "}
        SDL_Texture)
      </p>
      <p>
        I looked up how other people made SDL2 demos, how multithreading would
        work with SDL2, and general "why is my SDL2 game running slow"
        questions, leading to little progress. Eventually, I found one post
        saying that someone's game was running slowly because they were deleting
        their SDL_Surface every frame, and recreating it from the image every
        frame.
      </p>
      <p>
        While I had a system to cache the SDL_Surfaces, I realized that I was
        running the conversion from SDL_Surface -{">"} SDL_Texture every frame.
        This was due to me mistakenly believing that the SDL_Texture was the
        post-transformation version of the sprite, and was unable to be cached
        as a result. After realizing this, I made another cache for SDL_Surface
        -{">"} SDL_Texture, and was able to access the cached SDL_Textures,
        changing my total framerate from ~40fps to a whopping 500-670fps!
      </p>
      <p>
        This felt amazing. I was able to solve an important problem without
        having the answer handed to me, and as a result, I didn't have to worry
        about performance for the rest of development. In the future I know I'll
        never make this mistake again, and knowing it's possible to optimize my
        games to run this well will help quell the doubt of whether or not I can
        do better.
      </p>
      <h3>AI Avoidance:</h3>
      <p>
        tl ; dr - I avoided using any AI assistance while developing Poppy's
        Scuttle Slugging as I took this project on to learn.
      </p>
      <p>
        I think AI is a really cool thing, but I don't want to abuse it as a
        substitute for learning, in the same way you wouldn't bring a gun to a
        martial arts competition and deem yourself the winner since you're the
        best at fighting.
      </p>
      <h3>Code Structure:</h3>
      <p>
        During the development of this project, it was a goal of mine to write
        code that was readable, maintainable, and efficient. This meant getting
        rid of my old bad habits to create arbitrary 'temp' variables, or using
        'magic numbers' that have no explanation behind them and just work.
      </p>
      <p>
        One way I accomplished this was by documenting my header files as I
        went, which was a total lifesaver later into production as I'd forget
        some of my older thought processes.
      </p>
      <p>
        I know for a fact that I would have had to backtrack a lot if I had
        stuck with my old practices, but because of my code structure and
        documentation I was able to keep all of the functions managed and
        accurately defined.
      </p>
      <h3>What I learned:</h3>
      <p>
        Looking back on it, I learned a lot more that I thought I would have. I
        learned about how to effectively use smart pointers, how to document
        code and not just comment it, how namespaces work, and so much more. I
        also learned a lot about digital art, and have definitely felt my
        improvement as I continued to work on the game.
      </p>
      <p>
        One of the most important things that I learned is that I'm able to
        solve problems that other people haven't solved before (sort of). Though
        I'm sure someone else has likely solved the same issue I ran into with
        the frame rate, I wasn't able to find the solution from simply looking
        it up. I was able to solve it on my own after learning more thoroughly
        about how objects in SDL2 work, which felt awesome!
      </p>
    </div>,
  ],
  [
    "Portfolio Website",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/ultradagon.github.io"
        target="_blank"
        className="header-link"
      >
        View on GitHub!
      </a>
      <p>
        This website you're on right now is my portfolio website! It's made in
        TypeScript using React with Vite, and I had a blast writing my own css
        instead of sticking with a framework.
      </p>
      <p className="left">
        <img src={windowsxpPng} />
        The current version is loosely based on Windows XP, which was the first
        operating system I used as a kid. It's been a lot more fun to make than
        a traditional website, which was what I went for in my first version. As
        of now, I'm not sure if I'm going to stick with github pages as the host
        or switch to a dynamically hosted website.
      </p>
      <p>
        As of now, you're still able to navigate the{" "}
        <Link to="/old-home">old portfolio</Link>, though it doesn't look{" "}
        <i>exactly</i> how it used to due to me removing{" "}
        <a href="https://getbootstrap.com/" target="_blank">
          bootstrap
        </a>
        .
      </p>
    </div>,
  ],
  [
    "No More Twitter Blue",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/NoMoreTwitterBlue"
        target="_blank"
        className="header-link"
      >
        View on GitHub!
      </a>
      <p>
        No More Twitter Blue is a Google Chrome extension that removes posts
        from Twitter Blue (X Premium) users from your feed. It was made for a
        friend who was annoyed with how flooded his feed was with posts from
        blue checkmark accounts, and so I made a fix.
      </p>
    </div>,
  ],
  [
    "FIRST Robotics Scouting App",
    <div className="content popup-content">
      <span className="header-link">
        <a href="https://github.com/rr1706/Scouting-2020" target="_blank">
          View on GitHub!
        </a>
        <a
          href="https://docs.google.com/presentation/d/18Bd_IN4WU5ClfvS3NTWvgwj77zyrOeAJPGrfPlbPnOg/edit?usp=sharing"
          target="_blank"
        >
          View demo slides!
        </a>
      </span>
      <p className="left">
        In highschool, I made this scouting app in Java for FIRST Robotics team
        1706, the Ratchet Rockers. This app's success led to me overseeing
        future scouting app development until my graduation in 2022. The app's
        purpose is to record information about other teams competing in the
        FIRST Robotics Competitions. Users would record stats like speed, points
        earned, different objective capabilities, if they won, and more.
      </p>
      <p>
        FIRST Robotics Competitions are split into two match phases. The first
        being qualification matches, where all 3 robots on a team would gain
        points based on how they performed during a match. The second phase is
        the playoffs, where the top 8 scoring teams would become alliance
        captains, and have to choose two teams each to be part of their
        alliance. Knowing which teams were strong or would synergize with your
        team was crucial information needed if you want a better chance at
        winning.
      </p>
      <p>
        After a qualification match finishes, the data recorded by the scouting
        app is sent to a spreadsheet. The spreadsheet would take this
        information, and rank the teams based on how much we would want them to
        join our alliance, whether we were an alliance captain or in the case
        that we needed to help our alliance captains choose another ally.
      </p>
    </div>,
  ],
  [
    "No More Twitter Blue",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/NoMoreTwitterBlue"
        target="_blank"
        className="header-link"
      >
        View on GitHub!
      </a>
      <p>
        No More Twitter Blue is a Google Chrome extension that removes posts
        from Twitter Blue (X Premium) users from your feed. It was made for a
        friend who was annoyed with how flooded his feed was with posts from
        blue checkmark accounts, and so I made a fix.
      </p>
    </div>,
  ],
  [
    "Future's Market Banking",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/FuturesMarketBank"
        target="_blank"
        className="header-link"
      >
        View on GitHub!
      </a>
      <p>
        Future's Market Banking is a mock banking system I made with a group of
        two other people as a databases class project. It was written in Python
        and used a local MySQL server as the database. Some of the features
        include: Account creation, account login, money deposit, money transfer
        with message, store browsing, purchasing items from stores, creating
        store listings, and more!
      </p>
    </div>,
  ],
  [
    "How To Use",
    <div className="content popup-content">
      <p className="left">
        <img className="bordered" src={expandingTextPng} />
        Hover over text with "\" to the right to expand the menu. Click that
        text to enable/disable it being always expanded.
      </p>
      <p className="right">
        <img className="bordered" src={moveWindowPng} />
        Grab the top bar of windows to drag them around and change their
        position.
      </p>
      <p className="left">
        <img className="bordered" src={hoverLinkPng} />
        Click on the text that is underlined upon hover to open the website or
        pop-up window associated with it.
      </p>
      <p className="right">
        <img className="bordered" src={resizeWindowPng} />
        Resize the windows by clicking and dragging the bottom right of the
        window.
      </p>
      <p className="left">
        <img className="bordered" src={hoverButtonPng} />
        You can click the buttons at the top right of the pop-up windows to
        close/expand the window.
      </p>
    </div>,
  ],
  [
    "About Me",
    <div className="content popup-content">
      <p>
        Hello! My name's Dagon, and I'm currently a senior studying computer
        science with minors in mathematics and computer engineering.
      </p>
      <p>
        Programming, especially making games, is my favorite hobby and im super
        passionate about it. My favorite language is by far C++, though I like
        Python for leetcode and Typescript for webdev. I'm currently putting the
        finishing touches on Poppy's Scuttle Slugging, and I plan on diving into
        Unreal Engine right after.
      </p>
      <p>
        Some of my other hobbies include playing video games, papercrafting, and
        hanging out with friends.
      </p>
    </div>,
  ],
]);

function PopUpWindow(props: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOldPosition, setOldMousePosition] = useState({ x: 0, y: 0 });
  const [grabbed, setGrabbed] = useState(false);
  const [xpos, setXpos] = useState(props.xpos);
  const [ypos, setYpos] = useState(props.ypos);
  const [maximized, setMaximized] = useState(false);

  // Allows the window to be movable
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      if (grabbed && !maximized) {
        setXpos(xpos + mousePosition.x - mouseOldPosition.x);
        setYpos(ypos + mousePosition.y - mouseOldPosition.y);
      } else {
        if (ypos < 0) setYpos(0);
        if (xpos < 0) setXpos(0);
      }

      setOldMousePosition(mousePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", Release);
  }, [grabbed, xpos, ypos, mousePosition, mouseOldPosition]);

  function Grab() {
    setGrabbed(true);
  }

  function Release() {
    setGrabbed(false);
  }

  function onClickMaximizeWindow() {
    setMaximized(!maximized);
  }

  let finalXpos = xpos > 0 ? xpos : 0;
  let finalYpos = ypos > 0 ? ypos : 0;
  let finalWidth: string | number = props.width + "px";
  let finalHeight: string | number = props.height + "px";

  if (maximized) {
    finalXpos = 0;
    finalYpos = 0;
    finalWidth = document.documentElement.clientWidth - 16 + "px";
    finalHeight = "calc(100vh - 2em - 1px)";
  }

  return (
    <div
      className={"window" + (maximized ? " maximized" : "")}
      style={{
        "--xpos": finalXpos + "px",
        "--ypos": finalYpos + "px",
        "--width": finalWidth,
        "--height": finalHeight,
      }}
    >
      <div
        className={"header " + (grabbed ? "" : "un") + "grabbed"}
        onMouseDown={Grab}
        onMouseUp={Release}
      >
        <p>
          {props.title}
          <button
            className="close"
            onClick={() => props.onClickCloseWindow(props.title)}
          >
            &#128473;
          </button>
          <button onClick={() => onClickMaximizeWindow()}>&#128470;</button>
          <button onClick={() => props.onClickCloseWindow(props.title)}>
            &#128469;
          </button>
        </p>
      </div>
      {popupContent.get(props.title)}
    </div>
  );
}

export default PopUpWindow;
