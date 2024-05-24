import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import leerHeroesAPI from "../helpers/queries";
import { Link } from "react-router-dom";
const Dc = () => {
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
            .filter((character) => character.publisher === "DC Comics")
            .map((hero, index) => {
              return (
                    <Col key={index} xs={12} sm={6} md={4} lg={3}>                    
                      <Card className="card-item">
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
  );
};

export default Dc;
