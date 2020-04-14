import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardBody, CardTitle,CardText } from 'reactstrap';

 class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedDish: null
    }
  

  }
  handleSelect= (dish)=>{
      console.log(dish);
      this.setState({
          selectedDish: dish
      })
  }

  renderSelect = (dish)=>{
      
          if(dish!= null){
            return(
            <Card>
                  <CardBody>
                  <CardImg width= "100%"src= {dish.image} alt={dish.name} />
                      <CardTitle>
                          {dish.name}
                      </CardTitle>
                      <CardText>{dish.description}</CardText>
                  </CardBody>
                  </Card>
                  )
          }else{
              return(
                  <p>Loading dish ...</p>
              )
          }
              
             
      
  }

    render() {
        const menu = this.props.dishes.map(dish =>{
            return(
                <div className="col-12 col-md-5 m-2">
                    <Card key= {dish.id}
                        onClick= {()=>this.handleSelect(dish)}>
                            <CardImg width= "100%"src= {dish.image} alt={dish.name} />
                        
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                              
                        </CardImgOverlay>
                    </Card>
                </div>
            )
                
            
        })
        return (
             <div className="container">
            <div className="row">
              
                  {menu}
            
            </div>
            <div className="row col-12 col-md-6">

                {this.renderSelect(this.state.selectedDish)}
            </div>

          </div>
        )
    }
}

export default Menu; 