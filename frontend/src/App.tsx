import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.png";

function App() {
  return (

    <div className="max-w-[1344] mx-auto flex items-center flex-col my-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          {" "}
          duo{" "}
        </span>
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6"></div>
        <a href="" className="">

        </a>
    </div>
  );
}

export default App;
