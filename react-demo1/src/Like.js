import React from 'react';

class Like extends React.Component{
  constructor(props){
    super(props);
    this.state = {like: false};
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
  }

  like(){
    console.log('thumbsUp:', this);
    this.setState({like: true});
  }

  dislike(){
    console.log('thumbsDown:', this);
    this.setState({like: false});
  }

  render(){
    let img = "https://openclipart.org/image/2400px/svg_to_png/192849/thumbs-down-left.png";
    if (this.state.like) {
      img = "http://www.clker.com/cliparts/2/7/d/5/1247117411176075605Symbol_thumbs_up.svg";
    }
    console.log(this.state.like);
    return (
      <div>
        <h3>Like</h3>
        <img src={img} height={'100px'}/>
        <button onClick={this.like}>Like</button>
        <button onClick={this.dislike}>Dislike</button>
      </div>
    );
  }
}

export default Like;
