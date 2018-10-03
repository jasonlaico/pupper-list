import React, { Component } from 'react';
import axios from 'axios';

class StarWars extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      people: []
    };
  }

  componentDidMount() {
    this.getPeople()
    // this.getPeopleById()
    // this.getPeopleQuery()
  }

  // Get all people
  getPeople() {
    axios.get('https://swapi.co/api/people').then(response => {
      console.log('People >>>>', response.data.results);
      this.setState({people: response.data.results})
    });
  }

  //Get people by id
  getPeopleById() {
    axios.get('https://swapi.co/api/people/1').then(response => {
      console.log('Get People by ID >>>', response.data);
    });
  }

  // Get people by search query
  getPeopleQuery() {
    const { name } = this.state;
    axios.get(`https://swapi.co/api/people?search=${name}`).then(response => {
      console.log('Query Search >>>', response.data.results);
    });
  }

  handleInput(val) {
    this.setState({ name: val });
    this.getPeopleQuery();
  }

  render() {
      console.log(this.state.people)
      const peopleMap = this.state.people.map((e, i)=> {
          return <div key={i}>
              <h1>{e.name}</h1>
              <p>{e.height}</p>
          </div>
      })
    return (
      <div>
        <input type="text" onChange={e => this.handleInput(e.target.value)} />
        <div>
            {/* {peopleMap} */}
        </div>
      </div>
    );
  }
}

export default StarWars;
