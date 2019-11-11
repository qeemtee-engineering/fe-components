import React, { useState, useRef, useEffect } from 'react';
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
  TimePicker,
  Tag,
  DatePicker,
  Richtext,
} from '../components';
import moment from 'moment';
import { SVG } from '../..';

const App = () => {
  const richRef = useRef<any>(null);
  const [rich, setRich] = useState(localStorage.getItem('rich__test'));
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(true);
  const { Panel } = Collapse;
  const { CheckableTag } = Tag;
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
  function callback(key: any) {
    console.log(key);
  }

  useEffect(() => {
    if (richRef.current) {
      // richRef.current.loadJSON(localStorage.getItem('rich__test'));
    }
  }, [richRef]);

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

  const handleChange = () => {
    setChecked(c => !c);
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TimePicker
          disabledHours={() => [10, 20]}
          defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
        />
        <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} disabled />
        <TimePicker minuteStep={15} secondStep={10} />
        <TimePicker use12Hours />
        <TimePicker use12Hours format="h:mm:ss A" />
        <TimePicker use12Hours format="h:mm a" />
      </div>
      <div>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="purple">purple</Tag>
        <CheckableTag checked={checked} onChange={handleChange}>
          My Tag
        </CheckableTag>
        <Tag
          closable
          visible={checked}
          onClose={() => {
            console.log('clicked');
            setChecked(false);
          }}
        >
          Movies
        </Tag>
      </div>
      <div>
        <DatePicker />
        <br />
        <MonthPicker placeholder="Select month" />
        <br />
        <RangePicker disabled />
        <br />
        <WeekPicker placeholder="Select week" />
        <br />
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Start" />
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="End" />
      </div>
      <div>
        <Richtext
          ref={richRef}
          value={rich}
          onChange={value => {
            setRich(value);
          }}
          onBlur={editor => {
            localStorage.setItem('rich__test', editor.target.value || '');
          }}
          error={!rich ? 'Please enter data' : ''}
          label="test"
        />
      </div>
    </div>
  );
};

export default App;
