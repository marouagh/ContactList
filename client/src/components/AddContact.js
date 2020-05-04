import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        tel: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
      componentDidMount() {
        this.props.isEdit && 
        this.setState({
          name: this.props.contact.name,
          email: this.props.contact.email,
          tel: this.props.contact.tel,
          id: this.props.contact._id

        })
      }
      handleModal = () =>{
        const { handleShow, handleClick} = this.props
        if(Object.values(this.state).indexOf("") === -1)
           {
            handleShow()
            handleClick(this.state)
            this.setState({name:'', email:'', tel:''});
            this.setState({show:false})
           } else {alert("all fields are required")}
        
      }
    //  AddNewContact = () => {
    //     if(Object.values(this.state).indexOf("") === -1)
    //        {
    //         this.props.handleAdd(this.state);
    //         this.setState({name:'', email:'', tel:''});
    //        this.setState({show:false})
    //       } else {alert("all fields are required")}
    //     }
   
    render() {
        
        const {show, handleShow}=this.props
 
        return (
            <div>
                <Button className='add-btn' variant="dark" onClick={handleShow}>+</Button>

      <Modal className='modal-form' show={show} onHide={handleShow} animation={false}>
        <Modal.Header closeButton/>
        <Modal.Body>
        <form className='modal-form'>
            <label>Name</label>
            <input type="text" name="name"  placeholder="your name" value={this.state.name} onChange={this.handleChange} />
            <label>Email</label>
            <input type="email" name="email"  placeholder="your email" value={this.state.email} onChange={this.handleChange}/>
            <label>Phone Number</label>
            <input type="number" name="tel"  placeholder="your phone number" value={this.state.tel} onChange={this.handleChange}/>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>Close</Button>
          <Button variant="primary" onClick={this.handleModal}>Save</Button>
        </Modal.Footer>
      </Modal>
                
            </div>
        )
    }
}
