import React, {Component} from 'react';


class Banner extends Component{
constructor(props){
    super(props);
    this.state={isHide:true};
    this.hideBar = this.hideBar.bind(this)
  }
  hideBar(){
    if (window.scrollY > 700 && this.state.isHide === true){
      console.log('hey')
      this.setState({isHide:false})
    }
  }
  componentDidMount(){
      window.addEventListener('scroll',this.hideBar);
  }
  componentWillUnmount(){
       window.removeEventListener('scroll',this.hideBar);
  }
  render(){
    //css position:fixed
      if (this.state.isHide){
        return '';
      }
      return(
        <div className = "btm-bar" style= {{backgroundImage: `url("/banner-desktop@1x.png")`, width: "100%", "height":  "100px"}}>
        <div> <button onClick={()=> {this.setState({isHide: true})}}>x</button></div>
        <h2>Space, the final frontier</h2>

        <p>Get the latest flight offers, planet deals and travel reviews delivered straight to your inbox</p>
        <br/>
        <p>Be inspired and subscribe below</p>
        <button>Subscribe</button>

        </div>
      )
    }
}

export default Banner;
