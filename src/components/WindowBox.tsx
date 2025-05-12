import ExpandingConsoleText from "./ExpandingConsoleText";
import "./WindowBox.css";

//https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

interface Props {
  xpos: number;
  ypos: number;
  width: number;
  height: number;
}

function WindowBox(props: Props) {
  return (
    <>
      <div
        className="window"
        style={{
          "--xpos": props.xpos + "px",
          "--ypos": props.ypos + "px",
          "--width": props.width + "px",
          "--height": props.height + "px",
        }}
      >
        <div className="header">
          <p>[C:\] C:\WINDOWS\system32\cmd.exe</p>
        </div>
        <div className="content">
          <div className="output">
            <p>
              C:\{">"}dir /b{"\n\n"}
            </p>
            <p>C:\ (Home)</p>
            <p>..\ (Go Back){"\n\n"}</p>
            <p>about_me</p>
            <ExpandingConsoleText
              head={"socials"}
              children={[
                <a
                  href="https://github.com/UltraDagon"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p>|--{">"} GitHub</p>
                </a>,
                <a
                  href="https://linkedin.com/in/dagon-w"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p>|--{">"} LinkedIn</p>
                </a>,
                <a
                  href="mailto:dagon.williams@gmail.com"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p>|--{">"} Email</p>
                </a>,
              ]}
            />
            {
              <ExpandingConsoleText
                head="projects"
                children={[
                  <p>|--{">"} Operating_Standards_Project</p>,
                  <p>|--{">"} Portfolio_Website</p>,
                  <p>|--{">"} No_More_Twitter_Blue</p>,
                  <p>`--{">"} FIRST_Robotics_Scouting_App</p>,
                ]}
              />
            }
          </div>
          <div className="input">
            <p>C:\WINDOWS\system32{">"}dir</p>
          </div>
        </div>
      </div>
    </>
  );
}

/*
I want it so that you'll click on each menu option and it will type out the command for you (ex: cd ../ -> cls -> dir /b):

C:/ (Home)
../ (Go back)
about_me/
socials/
projects/ ((expands on hover, all 'text/' will have these little dropdown menus appear one line at a time))
|--> Project 1
|--> Project 2

*/

/*
Not sure if I want to change it to me more accurate by changing the format from

folder/
file

to

folder
file.abc
*/

export default WindowBox;
