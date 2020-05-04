import React,{Component} from 'react';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <ContactList/>
        
      </div>
    );

  }
  
}

export default App;
