import { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Image  } from 'react-bootstrap'
import DetalleHeroe from './DetalleHeroe'
import leerHeroesAPI from '../helpers/queries.js'

const Heroes = () => {
  const [listaHeroes, setListaHeroes] = useState([]);
  const [searchHeroes, setSearchHeroes] = useState("");

  useEffect(() => {
    traerDatos()
  }, [])

  const traerDatos = async() => {
    try {
      const listaHeroes = await leerHeroesAPI()
      setListaHeroes(listaHeroes)
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchChange = (event)=>{
    setSearchHeroes(event.target.value);
  };

  const filteredHeroes = listaHeroes.filter(heroe =>
    heroe.superhero.toLowerCase().includes(searchHeroes.toLowerCase())
  );

  return (
    <Container>
      <Form className="my-4">
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Buscar superhéroe"
            value={searchHeroes}
            onChange={handleSearchChange}
          />
        </Form.Group>
      </Form>
      <Row>
      {filteredHeroes.length > 0 ? (
          filteredHeroes.map(heroe => (
            <Col key={heroe.id} xs={12} sm={6} md={4} lg={3}>
              <DetalleHeroe heroe={heroe} />
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <>
            <Image 
              src="https://cdn.shopify.com/s/files/1/0229/0839/files/error-404-http-web.jpg?v=1646148852" 
              alt="Resultado no encontrado" 
              fluid 
            />
              <h6> Tu Hero viene en camino...</h6>
            </>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Heroes