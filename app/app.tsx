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
  FileUploader,
  Radio,
  RichTextDisplay,
  PhoneNumber,
  getPassedPhoneNumber,
  checkPhoneNumberValidity,
  Carousel,
} from '../src';
import moment from 'moment';

const App = () => {
  const [contactNumber, setContactNumber] = useState<null | {
    nationalNumber: string;
    countryCode: string;
  }>();
  const [hasContact, setHasContact] = useState(true);
  const richRef = useRef<any>(null);
  const [rich, setRich] = useState(localStorage.getItem('rich__test'));
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(true);
  const [file, setFile] = useState<{ mediaUrl: string; mediaType: string; name?: string }[]>([
    {
      mediaType: 'image/jpeg',
      mediaUrl: 'https://dev-assets.qeemtee.com/1576126934174-images(4).jpeg',
      name: 'images (4).jpeg',
    },
  ]);
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

  const onPhoneChange = (value: any) => {
    const phone = value && value.phone;
    const parsedNum = getPassedPhoneNumber(phone || '') || {};
    let flag = true;
    if (!phone) {
      flag = false;
    } else {
      if (!parsedNum || !checkPhoneNumberValidity(phone)) {
        flag = false;
      }
    }
    setContactNumber({
      countryCode: parsedNum.countryCallingCode,
      nationalNumber: parsedNum.nationalNumber,
    });
    setHasContact(flag);
  };

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
    setChecked((c) => !c);
  };

  return (
    <div className="container">
      <div>
        <Carousel
          autoPlay={false}
          autoPlayDuration={5}
          showDots={true}
          disableArrow={true}
          images={[
            'https://caferati.me/images/series/bojack-0.png',
            'https://caferati.me/images/series/bojack-5.jpg',
            'https://caferati.me/images/series/bojack-3.jpg',
            'https://caferati.me/images/series/bojack-4.jpg',
            'https://caferati.me/images/series/bojack-1.png',
            'https://caferati.me/images/series/bojack-2.png',
          ]}
          captions={['test1', 'test2', 'test3', 'test4', 'test5']}
        />
      </div>
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
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
          (day) => (
            <Checkbox key={day} label="check" required>
              {day}
            </Checkbox>
          )
        )}
      </div>
      <div>
        <Input label="Password" required disabled type="password" />
        <Input type="email" />
      </div>
      <div>
        <Switch label=" " required color="secondary" />
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
            <ul>
              <li>Faizan</li>
              <li>Faizan</li>
            </ul>
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
        <Currency value="100.123" />
        <Currency value="100" side="left" symbol="€" />
        <Currency value="100.000000001" symbol="TBH" />
        <Currency value="10012341231252123.12345" />
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
        <RangePicker />
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
          onChange={(value: React.SetStateAction<string | null>) => {
            setRich(value);
          }}
          onBlur={(editor: { target: { value: any } }) => {
            localStorage.setItem('rich__test', editor.target.value || '');
          }}
          error={!rich ? 'Please enter data' : ''}
          label="test"
        />
        <Richtext value="Faizan" />
      </div>
      <RichTextDisplay data={rich} />
      <div>
        <FileUploader value={file} onChange={setFile} />
      </div>
      <div>
        <FileUploader onChange={setFile} />
      </div>
      <div>
        <Radio color="secondary" />
      </div>
      <div>
        <PhoneNumber
          value={
            contactNumber && contactNumber.nationalNumber
              ? `+${contactNumber.countryCode}${contactNumber.nationalNumber}`
              : ''
          }
          hasContact={hasContact}
          placeholder="Enter phone number"
          international={false}
          country="IN"
          displayInitialValueAsLocalNumber={true}
          onChange={(phone: any) => onPhoneChange({ phone })}
        />
      </div>
    </div>
  );
};

export default App;
