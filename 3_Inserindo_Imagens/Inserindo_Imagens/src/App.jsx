import './App.css';

// 2- Imagem em assets

import night from './assets/city.jpg'

// 3 - useState

import Data from '../components/Data';
import ListRender from '../components/ListRender';

function App() {

  return (
      <div className='App' style={{paddingBottom:"500px"} }>
       <h1>
        Inserindo Imagens
       </h1>

       {/* 1- Inserindo imagem de public */}

      <img src="/img1.jpg" alt="Sunset" />

      {/* 2 - Importando de assets como Componente usando Template Expression */}

      <img src={night} alt="Night" />

      {/* 3 - useState */}

      <Data/>

      {/* 4 - Renderizando listas */}

      <ListRender/>

      </div>
  );
}

export default App;
