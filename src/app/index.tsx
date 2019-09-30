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
  Currency,
  Number,
} from '../components';

const App = () => {
  const [visible, setVisible] = useState(false);
  const { Panel } = Collapse;

  function callback(key: any) {
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
    <div className="container">
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
        <Collapse
          expandIconPosition="right"
          accordion={true}
          defaultActiveKey={['1']}
          onChange={callback}
        >
          <Panel header="This is panel header 1" key="1">
            <p>
              See ya later, <em>Alligator</em>!
            </p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>
              After a 'while, <em>Crocodile</em>!
            </p>
          </Panel>
        </Collapse>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Currency style={{ color: '#f9285c', fontSize: '22px' }} value="1000.25" />
        <Currency value="100.123" fixed={0} />
        <Currency value="100" side="left" fixed={1} symbol="€" />
        <Currency value="100.000000001" fixed={false} symbol="TBH" />
        <Currency value="10012341231252123.12345" fixed={3} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Number value="100.123" fixed={0} />
        <Number value="100.999" fixed={0} />
        <Number value="100" fixed={1} />
        <Number value="1e-18" fixed={2} />
        <Number value="750.999966058" fixed={2} />
        <Number value="750.999966058" fixed={5} />
        <Number value="10012341231252123.12345" fixed={3} />
        <Number value="-10012341231252123.12345" fixed={3} />
      </div>
    </div>
  );
};

export default App;
