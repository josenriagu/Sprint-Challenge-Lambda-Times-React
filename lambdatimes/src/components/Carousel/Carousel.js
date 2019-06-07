import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      ActiveImageIndex: 0,
      carousel: []
    }
  }
  componentDidMount(){
    this.setState({...this.state, carousel: carouselData})
  }
  goToSlide(index) {
    this.setState({ ActiveImageIndex: index });
  }
  leftClick = (e) => {
    e.preventDefault();

    let index = this.state.ActiveImageIndex;
    let carouselDataLength = this.state.carousel.length;
    if (index < 1) {
      index = carouselDataLength;
    }

    --index;

    this.setState({
      ActiveImageIndex: index
    });
  }

  rightClick = (e) => {
    e.preventDefault();

    let index = this.state.ActiveImageIndex;
    // let { carouselData } = this.props;
    let carouselDataLength = carouselData.length - 1;

    if (index === carouselDataLength) {
      index = -1;
    }

    ++index;

    this.setState({
      ActiveImageIndex: index
    });
  }

  selectedImage = () => {
    return <img src={''} alt='carousel' style={{display: 'block'}} />
  }
  
  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={e => this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={e => this.rightClick}>{">"}</div>
      </div>
    )
  }
}