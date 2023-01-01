// import logo from './logo.svg';
import './App.css';
function Article(props){
  return <Article>
    <h2>{props.title}</h2>
    {props.body}
  </Article>
}

function App() {
  return (
    <div className="App">
      <Article title='welcome' body='Hello, WEB'></Article>
    </div>
  );
}

export default App;
