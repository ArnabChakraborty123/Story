"use client"
import React, { useState } from 'react';
import { Button, Image } from 'antd';

function AppologyPage() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-900 h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center font-bold py-8 text-white">
        <span className="bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
          🙏 Apology for Everything
        </span>
      </h1>
      <div className="mb-8">
        <Button type="primary" onClick={() => setVisible(true)}>
          Show Image Preview
        </Button>
      </div>
      <Image
        width={200}
        style={{
          display: 'none',
        }}
        src="/images/secret_gift.jpg"
        preview={{
          visible,
          src: "/images/secret_gift.jpg",
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
      <div className="max-w-xl text-center px-4 mb-8">
        <p className="text-white">
        Lots of times I have done lots of mistakes. Sometimes I have broken your hearts though I am not sure, cause you really don't share your thoughts with me. Probably I am not that much good friend. So I am making this page to apologize to you for everything and every mistake that makes me a bad friend. Listen this website is not just for apologizing. Rather this website is for making you feel special on your special day and I really hope you are visiting this page and reading these lines and thinking that finding me as a friend was your best decision. The image under the heading is just for you. Even the pic of us under my quotes is a very old pic from covid time when we used to go to Panday sir, that too for a very short time. But still, after I lost my dearest Poco I only had this one in my oldest phone.        </p>
      </div>
      
      <div className="max-w-xl">
        <Image
          src="/images/me_with_you_1.jpg"
          alt="koushani logo"
          width={200}
          height={300}
          className="mx-auto"
        />
      </div>
     
    </div>
  );
}

export default AppologyPage;
