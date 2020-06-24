import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function CatCard(props) {
  return props && props.cat ? (
    <Col md={3} sm={6} xs={12}>
      <Card className="card">
        <Card.Img src={props.cat.url} />
        <Card.Body>
          <Link className="btn btn-primary btn-block" to={`/${props.cat.id}`}>
            View details
          </Link>
        </Card.Body>
      </Card>
    </Col>
  ) : null;
}
