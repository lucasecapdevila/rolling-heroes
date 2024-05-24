import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { leerUnHeroeAPI } from "../../helpers/queries";

const DetalleHeroe = ({heroe}) => {
  useEffect(() => {
    leerUnHeroeAPI()
  }, [])

  const { id } = useParams()
  const {superhero, publisher,alter_ego, first_appearance, characters, url } = heroe

  return (
    <div className="py-4">
       <Card className="card-item">
        <Card.Img
          style={{ width: "100%", height: "350px" }}
          variant="top"
          src={url}
        />
        <Card.Body className="card-body">
          <Card.Title>{superhero}</Card.Title>
          <span>{publisher}</span>
          <span> Alter ego: {alter_ego}</span>
          <span className="fs-12"> Characters: {characters}</span>
        </Card.Body>
        <Link className="btn btn-success align-self-end mb-2 me-2" to={`/heroes/${id}`}>Ver mas</Link>
      </Card>
    </div>
  );
}

export default DetalleHeroe