import { useState, useEffect } from "react";

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

const popupContent = new Map([
  [
    "Operating Standards Project",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/ultradagon.github.io"
        target="_blank"
        className="github-link"
      >
        View on GitHub!
      </a>
      <p>
        "Operating Standards Update" is a tool used to transfer data from
        meeting minutes taken on a Google Doc into a Google Sheet.
      </p>
    </div>,
  ],
  [
    "Poppy's Scuttle Slugging",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/PoppysScuttleSlugging"
        target="_blank"
        className="github-link"
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
        a half I would make sure I pushed a feature every other day. This way I
        would avoid burnout, while figuring out a realistic set of features
        needed for the end product. I feel like this was a good decision, though
        when I take on another project like this, I think I'll try and fully
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
        As I worked on these features, I'd set myself about a weeks deadline to
        finish everything on the list. While I missed those smaller deadlines,
        it gave me the motivation to finish more than what was really needed,
        giving me more time to ensure the game was to a quality that I was happy
        with.
      </p>
      <p>
        In the end, I did have to scrap a few features from the demo, but I'd
        like to work on this more in the future whenever I have the time. As for
        time management, I feel like my system worked pretty well and was able
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
        standard of perfection a bit, and learned how to create better digital
        art.
      </p>
      <p>
        Before this project, my experience with digital art summed up to a few
        environment sprites and a golf ball for a game jam that I did with some
        buddies last year. My experience with handmade art didn't go much past
        that, though I would say that I'm good at seeing and copying the lines I
        see on real objects.
      </p>
      <p>
        While it did scare me, I wanted to get better at art, so why not get
        better now? I didn't want to paint digitally, so I would split all
        sprites into many single color layers, and then put lighting and shadows
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
        not have the art fundamentals to make a proportially correct body yet.
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
        and as a result I didn't have to worry about performance for the rest of
        development.
      </p>
      <p>
        In high school, I was used to making games with Python, so I had quite a
        few games running at 20fps average. I've seen what other people can do
        with C++, and knew I could make something that would have blown high
        school me away.
      </p>
      <p>
        At least that's what I thought. Pretty early on, I was dropping to 40fps
        while drawing 5-10 sprites onto the screen, with. If I was going to be
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
        saying that someone's game was running slow because they were deleting
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
        having the answer handed to me, and as a result I didn't have to worry
        about performance for the rest of development. In the future I know I'll
        never make this mistake again, and knowing it's possible to optimize my
        games to run this well will help quell the doubt of whether or not I can
        do better.
      </p>
      <h3>AI Avoidance:</h3>
      <p></p>
      <h3>Code Structure:</h3>
      <h3>What I learned:</h3>
    </div>,
  ],
  [
    "Portfolio Website",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/ultradagon.github.io"
        target="_blank"
        className="github-link"
      >
        View on GitHub!
      </a>
    </div>,
  ],
]);

function PopUpWindow(props: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOldPosition, setOldMousePosition] = useState({ x: 0, y: 0 });
  const [grabbed, setGrabbed] = useState(false);
  const [xpos, setXpos] = useState(props.xpos);
  const [ypos, setYpos] = useState(props.ypos);

  // Allows the window to be movable
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      if (grabbed) {
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

  return (
    <div
      className="window"
      style={{
        "--xpos": (xpos > 0 ? xpos : 0) + "px",
        "--ypos": (ypos > 0 ? ypos : 0) + "px",
        "--width": props.width + "px",
        "--height": props.height + "px",
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
          <button>&#128470;</button>
          <button>&#128469;</button>
        </p>
      </div>
      {popupContent.get(props.title)}
    </div>
  );
}

export default PopUpWindow;
