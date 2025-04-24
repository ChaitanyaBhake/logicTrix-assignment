'use client';
import OptInOrOut from '@/components/OptInOrOut';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [optInKeywords, setOptInKeywords] = useState([
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
  ]);
  const [optOutKeywords, setOptOutKeywords] = useState([
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
    'Keyword',
  ]);
  const [newOptInKeyword, setNewOptInKeyword] =
    useState('');
  const [newOptOutKeyword, setNewOptOutKeyword] =
    useState('');
  const [optInEnabled, setOptInEnabled] = useState(true);
  const [optOutEnabled, setOptOutEnabled] = useState(true);

  return (
    <>
      <div className=" ">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 border-b z-0">
          <h1 className="text-xl font-semibold">
            Opt-In Management
          </h1>
          <div className="flex gap-2">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              Save
            </Button>
          </div>
        </div>

        {/* Background Hero  */}
        <div className="relative  p-6 max-w-7xl m-auto ">
          {/* Hero Banner */}
          <div className="relative flex justify-between items-center ">
            <div>
              <h2 className="text-2xl font-semibold text-blue-500">
                Opt-In Management
              </h2>
            </div>

            <div className="relative w-[120px] h-[130px]">
              <Image
                src={'/chat.png'}
                width={76}
                height={66}
                alt="chat-Img"
                className="absolute right-35"
              />
              <Image
                src={'/Isolation_Mode.png'}
                width={120}
                height={130}
                alt="chat-Img"
                className="absolute top-6 right-3 z-10"
              />
            </div>
          </div>

          <Card className="relative max-lg:w-[98%]  max-w-[100%]  border rounded-lg p-6 z-50 ">
            <div className="">
              {/* Opt-in Section */}
              <OptInOrOut
                type="opt-in"
                enabled={optInEnabled}
                setEnabled={setOptInEnabled}
                keywords={optInKeywords}
                setKeywords={setOptInKeywords}
                newKeyword={newOptInKeyword}
                setNewKeyword={setNewOptInKeyword}
              />

              {/* Opt-out Section */}
              <div className="mt-8">
                <OptInOrOut
                  type="opt-out"
                  enabled={optOutEnabled}
                  setEnabled={setOptOutEnabled}
                  keywords={optOutKeywords}
                  setKeywords={setOptOutKeywords}
                  newKeyword={newOptOutKeyword}
                  setNewKeyword={setNewOptOutKeyword}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
