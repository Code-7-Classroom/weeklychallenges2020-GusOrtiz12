import React, {Component} from 'react';
import './App.css';
import Person from './Person';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      persons:[
      { 
      name: 'Padín',
      phone: "787-323-3705",
      DoB:'November 34,2201',
      gender:'Hombre'},
      { 
      name: 'Esaí Chinea',
      phone: "787-427-5829",
      DoB:'July 40, 2501',
      gender:'Hombre'},
      { 
      name: 'Andres Ocasio',
      phone: "787-930-4917",
      DoB:'October 32, 2068',
      gender:'Hombre'},
      { 
      name: 'Sebastian Rivera',
      phone: "787-362-8073",
      DoB:'January 29, 2035',
      gender:'Hombre'},
      { 
      name: 'Daniela Iglesias',
      phone: "787-323-2349",
      DoB:'May 40, 2139',
      gender:'Mujer'},
      {
      name: 'Luis Llorente',
      phone: "787-234-4950",
      DoB: 'September 20, 1997',
      gender: 'Hombre'},
      ]
    };
  }
  render(){
    const person = this.state.persons;
    return(
      <div className="App">
          {person.map(el => <Person name={el.name} phone={el.phone}  dob={el.DoB} gender={el.gender}/> )}
      </div>
    )
  }
}

export default App;