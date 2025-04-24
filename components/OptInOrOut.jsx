import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {  X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const OptInOrOut = ({
  type,
  enabled,
  setEnabled,
  keywords,
  setKeywords,
  newKeyword,
  setNewKeyword,
}) => {
  const title = type === 'opt-in' ? 'Opt-in' : 'Opt-out';
  const responseTitle = `${title} Response`;
  const keywordsTitle = `${title} Keywords`;
  const keywordDescription = `The user will have to type exactly one of these messages on which they should be automatically ${
    type === 'opt-in' ? 'opted-in' : 'opted-out'
  }`;
  const router = useRouter()

  const addKeyword = () => {
    if (newKeyword.trim()) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const removeKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <Image
            src="/ICON.png"
            width={50}
            height={50}
            className=""
            alt="icon"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-blue-500">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">
            A text that explains what {type} is
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left */}
        <div className="bg-gray-50  p-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h4 className="font-semibold">
                {responseTitle}
              </h4>
              <p className="text-sm text-gray-500">
                Setup a response message for opt-in user
                keywords
              </p>
            </div>
            <Switch
              checked={enabled}
              onCheckedChange={setEnabled}
            />
          </div>

          <Button
            variant="default"
            className="bg-blue-500 hover:bg-blue-600 mt-2 mb-4 "
            onClick={() => router.push('/configure')}
          >
            <span className="mr-2">
              <Image
                src="/edit-03.svg"
                alt="Edit Icon"
                width={16}
                height={16}
              />
            </span>{' '}
            Configure
          </Button>

          <div className=" pt-4 pb-4  rounded-lg">
            <div className="relative">
              <div className="absolute w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src="/V-social icon chat.svg" 
                  width={40}
                  height={40}
                  alt="whatsapp-logo"
                  className="absolute  bottom-3"
                />
              </div>
              <div className="bg-white p-3 ml-3 rounded-lg border shadow-sm">
                <p className="text-sm">
                  Hi! Thanks for connecting. Someone from
                  our team will get in touch soon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <h4 className="font-semibold mb-1">
            {keywordsTitle}
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            {keywordDescription}
          </p>

          <div className="relative mb-4">
            <Input
              placeholder="# Add keyword"
              value={newKeyword}
              onChange={(e) =>
                setNewKeyword(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === 'Enter' && addKeyword()
              }
              className="pl-8"
            />
            <div
              className="absolute left-3 top-1/2 transform -translate-y-1/2  border-[1.8px] border-[#1C73E8] rounded-full w-4 h-4 flex items-center justify-center text-[#1C73E8] cursor-pointer"
              onClick={addKeyword}
            >
              +
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gray-100 text-gray-700 py-1 px-3 rounded-full"
              >
                {keyword}
                <button
                  onClick={() => removeKeyword(index)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OptInOrOut;
