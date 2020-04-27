import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';







function RenderDish({ dish }) {
  return (
    <div className=" col-12 col-md-4 m-1">
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

function RenderComments({ comments }) {
  const listComments = comments.map((comment) => {
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
  return (
  <div>
    {listComments}
    <CommentForm />
    </div>
    )
   
  ;
}
const required = (val)=>val && val.length;
const minLength = (len)=>(val)=> !val || (val.length) >= len;
const maxLength = (len)=>(val)=> !val || (val.length) <= len;

class CommentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleSubmit(values) {
    alert('Current state is :' + JSON.stringify(values))
  }

  render() {
    
      return (
      <div>
                <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>

              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values) =>{this.handleSubmit(values)}}>
                <Row className="form-group">
             
                  <Col md= {{size: 12}}>
                  <h5>Rating</h5>
                  <Control.select model=".rating" id="rating" name="rating" className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </Control.select>

                  </Col>
                </Row>
              <Row className="form-group">

                <Col md= {12}>
                <Label htmlFor="yourname"> <h5>Your Name</h5></Label>
                <Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name" className="form-control"
                  validators = {{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)

                  }}
                />
                <Errors
                  className="text-danger"
                  model=".yourname"
                  show= "touched"
                  messages= {{
                    required: 'Required',
                    minLength: 'Must be greater than two characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                />
                

                </Col>
              </Row>
              <Row className="form-group">
              
                <Col md={12}>
                <Label htmlFor="message" ><h5>Comment</h5></Label>
              
                <Control.textarea  model=".message" id="message" name="message" rows="6" className="form-control" />

                </Col>
              </Row>
              <Row className="form-group">
              <Col md={{size:12}}>
                                    <Button type="submit" color="primary">
                                   Submit
                                    </Button>
                                </Col>
              </Row>
              

                </LocalForm>

                </ModalBody>

              </Modal>

              </div>  

      )

    

      
  }
}

const  DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                
                    <RenderDish dish={props.dish} />
                
                <div className="col-12 col-md-5 m-1">
                <ul className="list-unstyled">
                    <RenderComments comments={props.comments} />
                    </ul>
                </div>
            </div>
            </div>
        );
    }
    else return <div />;
}



export default DishDetail;