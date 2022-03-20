# React Focus Timer

React Focus Timer is a simple timer that allows you to keep track of how long you focus. This will help you keep track of how long you are developing without getting distracted.

## Installation

## Installation

With Yarn:

```bash
yarn add react-focus-timer
```

With npm:

```bash
npm install --save react-focus-timer
```

## Usage

Import Focus Timer component to be able to start keeping track of focus time.

## Example

```js
import logo from "./logo.svg";
import "./App.css";
import { FocusTimer } from "react-focus-timer";

function App() {
  return (
    <div className="App">
      <FocusTimer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
