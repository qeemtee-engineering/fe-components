import React, { useState } from 'react';
import './app.scss';
import { Button, Modal } from '../components';

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
    </>
  );
};

export default App;
