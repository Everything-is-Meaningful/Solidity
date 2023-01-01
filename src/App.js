// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
function Article(props){
  return <div>
    <h2>{props.title}</h2>
    {props.body}
  </div>
}

function Header(props){
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault()
      props.onChangeMode()
    }}>props.title</a></h1>
  </header>
}


function Nav(props){
  const lst = []
  for (let i=0; i<props.topics.length; i++){
    let t = props.topics[i]
    lst.push(<li>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault()
        props.onChangeMode(Number(event.target.id)) //target은 이벤트를 유발시킨 a를 뜻함
      }}>
      {t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lst}
    </ol>
  </nav>
}

function App() {
  const [mode, setMode] = useState('welcome')
  const [id, setID] = useState(null)
  const topics = [
    {id:1, title:'백'},
    {id:2, title:'은'},
    {id:3, title:'주'}
  ]
  let content = null;
  if (mode === 'welcome'){
    content = <Article title='welcome' body='Hello, WEB'></Article>
  } else if(mode==='READ'){
    let title, body = null;
    for (let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div className="App">
      <Header title = 'WEB header' onChangeMode={ ()=> {
        setMode('welcome')
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ')
        setID(_id)
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
