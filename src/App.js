import React, { useState } from 'react';
import './App.scss';
import Banner from './components/Banner/Banner';
import Contactus from './components/Contactus/Contactus'
import Doctors from './components/Doctors/Doctors';
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Protocols from './components/Protocols/Protocols'
import { AppBar, Button, Modal, Toolbar, Typography } from '@material-ui/core';

function App() {
const [open, setOpen] = useState(false);

  const handleAppointment = () => {
    setOpen(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h4" >
              Neetu's dental clinic
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="appointment-button">
          <Button variant="contained" color="secondary" onClick={handleAppointment} >Make an appointment</Button>
        </div>
          {/* <Modal
            open={open}
            onClose={() => setOpen(false)} >
              Hi
          </Modal> */}
      </header>
      <div className="sections">
        <Banner />
        <Services />
        <Protocols />
        <Doctors />
        <Testimonials />
        <Contactus />
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
