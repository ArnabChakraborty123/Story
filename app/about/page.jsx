"use client"

import { Collapse } from 'antd';

const { Panel } = Collapse;

const text1 = `
 Actually you have always surprised me with unexpected beautifull gifts wheather it is potrait or ferrero rocher. So I thought this is my time to show my art.
`;
const text2 = `
I am too much creative.
`;
const text3 = `
 Nabina helped me a lot by collecting me wish from Oyindrilla . As you know I am very shy and the way you contact  Subham for collecting my birthday pics were crazy. I  really wanted to contact your friends such as the one you guys call dustbin . But it was too difficult for me to talk with your friends whom I really don't know. 
`;
const text4 = `
I really dont have any other questions on mind. this pannel is just for making the page sexy.
`;

const items = [
  {
    key: '1',
    label: 'Why I am making this website?',
    content: <p>{text1}</p>,
  },
  {
    key: '2',
    label: 'Who gives me the Idea',
    content: <p>{text2}</p>,
  },
  {
    key: '3',
    label: 'How did I contact your friend?',
    content: <p>{text3}</p>,
  },
  
  {
    key: '4',
    label: 'Other questions',
    content: <p>{text4}</p>,
  },
];

function Qna() {
  const onChange = (activeKeys) => {
    console.log('Active Keys:', activeKeys);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-700 to-purple-900">
      <h1 className="text-white text-4xl mb-8">Some questions you might think</h1>
      <div className="flex justify-center w-full">
        <div className="w-full md:w-1/2">
          <Collapse defaultActiveKey={['1']} onChange={onChange}>
            {items.map(item => (
              <Panel header={item.label} key={item.key}>
                {item.content}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Qna;
