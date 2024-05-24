import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio'
import BarraNavegacion from './components/common/BarraNavegacion'
import Marvel from './pages/Marvel'
import Dc from './pages/Dc'
import Heroes from './pages/Heroes'
import DetalleHeroe from './pages/DetalleHeroe'
import ItemHeroe from './components/pages/ItemHeroe'

function App() {

  return (
    <>
      <BrowserRouter>
      <BarraNavegacion />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/dc" element={<Dc />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/:id" element={<ItemHeroe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
