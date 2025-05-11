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
          <h4>[C:\] C:\WINDOWS\system32\cmd.exe</h4>
        </div>
        <div className="content">
          <h4>Hello World!</h4>
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

export default WindowBox;
