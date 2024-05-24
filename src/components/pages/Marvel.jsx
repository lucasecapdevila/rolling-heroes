import React, { useEffect, useState } from "react";
import leerHeroesAPI from "../helpers/queries";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Marvel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    leerHeroesAPI()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="py-4">
            <Container>
              <Row>
      {data
        .filter((character) => character.publisher === "Marvel Comics")
        .map((hero, index) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3}>                    
                  <Card className="card-item" key={index}>
                    <Card.Img
                      style={{ width: "100%", height: "350px" }}
                      variant="top"
                      src={hero.url}
                
                    />
                    <Card.Body className="card-body">
                      <Card.Title>{hero.superhero}</Card.Title>
                      <span>{hero.publisher}</span>
                      <span> Alter ego: {hero.alter_ego}</span>
                      <span className="fs-12"> Characters: {hero.characters}</span>
                    </Card.Body>
                    <Link className="btn btn-success align-self-end mb-2 me-2" to={`/detalleHeroe/${hero.id}`}>Ver mas</Link>
                  </Card>
            </Col>
              );
            })}
          </Row>
        </Container>
    </section>
  )
}

export default Marvel