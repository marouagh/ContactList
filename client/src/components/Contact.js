import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import AddContact from './AddContact'


export default class Contact extends Component {
  state = {
    isShow: false
  }
  handleShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    })
  }
    render() {
        return (
            <div>

<div className='card-contact'>
    <img className='user' src='https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg' alt=''/>
    <Card.Body>
      <h4>{this.props.person.name}</h4>
      <Card.Text>
      <p>Email: {this.props.person.email}</p>
      <p>tel: {this.props.person.tel}</p>
      <div className='btnn'>
      <Button className="btn" variant="outline-dark" onClick={this.handleShow}>Edit</Button>
      <Button className="btn" variant="outline-dark" onClick={()=>this.props.handleDelete(this.props.person._id)}>Delete</Button>
        {this.state.isShow ?<AddContact show={this.state.isShow} handleShow={this.handleShow} isEdit={true} handleClick={this.props.handleEdit} contact={this.props.person}/>
         :null}
         </div>
      </Card.Text>
    </Card.Body>
  </div>
            </div>
        )
    }
}
