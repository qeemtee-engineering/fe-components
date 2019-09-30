import React, { useState } from 'react';
import './app.scss';
import {
  Button,
  Modal,
  TypeAhead,
  Checkbox,
  Notification,
  Input,
  Switch,
  Collapse,
} from '../components';

const App = () => {
  const [visible, setVisible] = useState(false);
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  function callback(key: string | string[]) {
    console.log(key);
  }

  const openNotification = () => {
    Notification.open({
      message: 'Notification Title',
      placement: 'topRight',
      type: 'success',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <div className='container'>
      <div>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Open Modal
        </Button>
      </div>
      <div>
        <Button onClick={openNotification}>Open Notification</Button>
      </div>
      <Modal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        title="First Modal"
      >
        This is modal.
      </Modal>
      <div>
        <TypeAhead
          options={[{ title: 'A', value: 1 }]}
          value={[]}
          labelKey="title"
          valueKey="value"
          isMulti={true}
          onChange={() => {}}
        />
      </div>
      <div>
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
          <Checkbox>{day}</Checkbox>
        ))}
      </div>
      <div>
        <Input type="password" />
      </div>
      <div>
        <Switch color="secondary" />
      </div>
      <div>
        <Collapse expandIconPosition='right' accordion={true} defaultActiveKey={['1']} onChange={callback}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default App;
