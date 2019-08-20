import React, { useState } from 'react';
import './app.scss';
import { Button, Modal, TypeAhead, PhoneNumber } from '../components';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => { setVisible(true)}}>Open</Button>
      <Modal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        title='First Modal'
      >
        This is modal.
      </Modal>
      <TypeAhead
        options = {[{title:'A',value:1}]}
        value = {[]}
        labelKey = 'title'
        valueKey = 'value'
        isMulti = {true}
        onChange = {()=>{

        }}
      />
      <PhoneNumber
          placeholder="Enter Test"
          value={ '' }
          international= {false}
          displayInitialValueAsLocalNumber= {true}
          countryOptions={["TH","CN","US", "|", "..."]}
          onChange= { (phone:any) => {} }
          inputClassName={'test-class'}
          hasContact={false}
      /> 
    </>
  );
};

export default App;
