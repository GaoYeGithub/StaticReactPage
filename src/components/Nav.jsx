import reactLogo from "/src/images/react.svg";

export default function Nav() {
  return (
    <>
      <nav>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="nav--icon" alt="React logo" />
        </a>
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </>
  );
}
