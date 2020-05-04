import React,{Component} from 'react';
import Contact from './Contact';
import AddContact from './AddContact'
import axios from "axios"

export default class ContactList extends Component {
  state ={
    contacts: [],
    show: false
  };

  handleShow = () =>{
      this.setState({
          show: !this.state.show
      })
  }
  componentDidMount(){
    this.getAllContacts()
  }
  getAllContacts= () =>{
    axios.get('/contacts').then((res)=>{
      this.setState({
        contacts: res.data
      })
    })
  }
  handleAdd = (newContact) =>{
      axios.post('/add_contact', newContact).then(this.getAllContacts())
  }
  handleDelete = (id) =>{
      axios.delete(`/delete_contact/${id}`).then(this.getAllContacts())
  }
  handleEdit = (contact) =>{
    axios.put(`/edit_contact/${contact.id}`,{name :contact.name,email: contact.email, tel: contact.tel}).then(this.getAllContacts())
  }
  render(){
    return (
      // <div className="list">
      //   {this.state.contacts.map((el, i)=>
      //   <Contact key={i} person={el} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>)}
      //   <AddContact show={this.state.show} handleShow={this.handleShow} handleClick={this.handleAdd}/>
        
        
      // </div>
      <div className='list-contact'>
      <div className='contact-from'>
        <img src='' alt='' className='avatar'/>
        <h1>Contact List</h1>
      </div>
      <div className='contact'>
      <img src='' alt='' className='avatar'/>
      
      {this.state.contacts.map((el, i)=>
      <Contact key={i} person={el} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>)}
      <AddContact show={this.state.show} handleShow={this.handleShow} handleClick={this.handleAdd}/>

    </div>
    </div>
    );

  }
  
}
