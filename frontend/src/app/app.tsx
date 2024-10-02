// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NavBar from "../components/NavBar";
import ErrorBoundary from "./ErrorBoundry";
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
    <div>
      <style dangerouslySetInnerHTML={{__html: styles }} />
      <ErrorBoundary>
        <NavBar/>
        <Router />
      </ErrorBoundary>
    </div>
  );
}

export default App;
