import React, { useState } from 'react';
import './app.scss';
import { Button, Modal, TypeAhead, Checkbox, Notification, Input, Switch } from '../components';

const App = () => {
  const [visible, setVisible] = useState(false);

  const openNotification = () => {
    Notification.open({
      message: 'Notification Title',
      duration: 0,
      placement: 'bottomLeft',
      type: 'success',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Button onClick={openNotification}>Open Notification</Button>
      <Modal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        title="First Modal"
      >
        This is modal.
      </Modal>
      <TypeAhead
        options={[{ title: 'A', value: 1 }]}
        value={[]}
        labelKey="title"
        valueKey="value"
        isMulti={true}
        onChange={() => {}}
      />
      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
        <Checkbox>{day}</Checkbox>
      ))}
      <Input type="password" />
      <Switch color='secondary' />
    </>
  );
};

export default App;
