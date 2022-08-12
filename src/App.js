import './App.css';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function App() {

  let { id } = useParams();
  console.log(id);
  const [token, setToken] = useState("");
  const limit = 3;
  let count = 0;
  if(localStorage.getItem("count")===null){
    localStorage.setItem("count",`${count}`);
  }
  useEffect(() => {
    if (typeof (id) != 'undefined' && id != null && id != "" ) {
      document.cookie = id;
      setToken(id);
      console.log(token);
      localStorage.setItem("count",`${0}`);
      redirect(`https://${window.location.host}/success`)
    } else {
      if(parseInt(localStorage.getItem("count"))<=limit){
        localStorage.setItem("count",`${parseInt(localStorage.getItem("count"))+1}`)
        redirect(`https://login-three-gamma.vercel.app/cookie/${window.location.host}`);
      }
      else if(parseInt(localStorage.getItem("count"))>3){
        localStorage.setItem("count",`${0}`);
        redirect(`https://${window.location.host}/error`)
      }
    }
  }, [])

  const redirect = url => {
    console.log(url);
    window.location.replace(url);
  }

  return (
    <div className="App">
      <header className="App-header">
        {"Token is "}
        {token}
      </header>
    </div>
  );

}

export default App;
