// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NavBar from "../components/NavBar";
import Router from "./Router";

const styles = `
* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-size: 16px;
    background-color: #f0f0f0;
}
`;

function App() {
  return (
    <>
      <style  dangerouslySetInnerHTML={{__html: styles }} />
      <NavBar/>
      <Router />
    </>
  );
}

export default App;
