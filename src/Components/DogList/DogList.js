import React, { Component } from 'react';
import axios from 'axios';

import Dogs from '../Dogs/Dogs';
import './DogList.css';

class DogList extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      favs: []
    };
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breed/husky/images').then(res => {
      console.log(res.data);
      this.setState({ dogs: res.data.message});
    });
  }

  // pointer
  // shiba
  // corgi

  handleDelete = id => {
    let temp = this.state.favs.slice(0,10);
    temp.splice(id, 1)
    console.log(id)

    this.setState({favs: temp})
  }

  handleAdd = id => {
    const {dogs, favs} = this.state
    let temp = favs.concat( dogs.slice(id, id+1))

    this.setState({favs: temp})
  }

  render() {
    const {dogs, favs} = this.state
      const map = dogs.slice(0,10).map((e,i)=> {
        return  <Dogs key={i} img={e} handleClick={(e)=> this.handleAdd(i)} button={'Add'}/>
      })

      const favMap = favs.map((e,i) =>{
        return <Dogs key={i} img={e} handleClick={(e) => this.handleDelete(i)} button={'Delete'}/>
      })
    return (
      <div className='dog'>
        <div className='dog_top'>

        <h1>Dogs</h1>
        </div>
        <div className='dog_map map1'>

        {map}
        </div>
        <h2>Favorite Puppers</h2>
        <div className='dog_map map2'>

          {favMap}
        </div>
      </div>
    );
  }
}

export default DogList;
