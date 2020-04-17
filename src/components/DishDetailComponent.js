import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <div className=" col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>


      </div>
    )

  }

  renderComments(comments) {
    const listComments = comments.map(comment => {
      if (comment != null) {
        return (

          <li key={comment.id}>
            <div>
              <p>{comment.comment} </p>
              <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>


            </div>
          </li>

        )
      } else {
        return (
          <div></div>
        )
      }

    })

    return listComments;
  }




  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <ul className="list-unstyled">
                {this.renderComments(this.props.dish.comments)}
              </ul>
            </div>

          </div>

        </div>

      )
    }
    return (
      <div>

      </div>
    );
  }
}

export default DishDetail;