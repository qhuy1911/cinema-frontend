import './Movie.css'
import React from 'react';

import axios from 'axios';
export default class Movie extends React.Component{
  state = {
    movies: []
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/movies`)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
      .catch(error => console.log(error));
  }
  render(){
    return(
    <>
      {this.state.movies.map((item)=>{
        return(<div className="movie_flex">
        <div className="movie_imgage"><img src="https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg" alt="Not found" /></div>
        <div className="movie_info">
          <h2 className="movie_title">{item.name}</h2>
          <p className="movie_description">{item.description}</p>
          <p>Ngày chiếu : 20/06/2022</p>
          </div>
          <button className="movie_button">Đặt vé</button>
          </div>
      )})
  }
      </>
  // </div>
  )
}
}
