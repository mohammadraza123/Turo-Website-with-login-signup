import { Button, Modal } from 'antd';
import { useState } from 'react';
import  './login.css';
const App = ( ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  
  return (
    <>
      <Button type="primary" onClick={showModal} className = "login">
        Login
      </Button>
      <Modal  open={isModalOpen} onOk={handleOk} onCancel ={handleCancel } >
        <div className='main-container'>
       
        <h1 className='login_heading'>Welcome back</h1>
        <form className='login_form'>

     <label>Email</label>
     <input  className='user_login' type= 'email'  placeholder='Email' id='log_email'></input>

     <label >Password</label>
     <input className='user_login' type = 'password' placeholder='Password' id='log_pas'></input>
     <button className='log_btn'>Log in</button>
        </form>
        </div>
        


      </Modal>
    </>
    
    );
  };
export default App;

// let email = document.getElementById("log_email")
// console.log(email);
