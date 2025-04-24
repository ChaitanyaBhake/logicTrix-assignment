'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Smile, Upload } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const WelcomeForm = () => {
  const [messageType, setMessageType] = useState('regular');
  const [contentType, setContentType] = useState('text');
  const [messageBody, setMessageBody] = useState('');
  const [mediaUrl, setMediaUrl] = useState(
    'https://unsplash.com/photos/people-sitting-at-the-table-'
  );

  const [variables, setVariables] = useState([
    { name: '1', value: 'Mohit' },
    { name: '2', value: 'Zara' },
  ]);

  const getFileTypeInfo = () => {
    switch (contentType) {
      case 'image':
        return {
          supported: '.png or .jpeg',
        };
      case 'document':
        return {
          supported: '.pdf, .docx, .xlsx',
        };
      default:
        return {
          supported: '.png or .jpeg',
        };
    }
  };

  const handleVariableChange = (index, field, newValue) => {
    const updatedVariables = [...variables];
    updatedVariables[index][field] = newValue;
    setVariables(updatedVariables);
  };

  useEffect(()=>{
    if(messageType === "pre-approved"){
        setContentType("image")
    } else {
        setContentType("text")
    }
  },[messageType])

  return (
    <>
      <div className=" flex max-lg:flex-col justify-center p-4 max-w-7xl mx-auto">
        <div className="p-6  max-lg:w-full w-[50%]">
          {/* User Inputs and Radio */}
          <RadioGroup
            value={messageType}
            onValueChange={setMessageType}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="pre-approved"
                id="pre-approved"
              />
              <Label htmlFor="pre-approved">
                Pre-approved template message
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="regular"
                id="regular"
              />
              <Label htmlFor="regular">
                Regular message
              </Label>
            </div>
          </RadioGroup>

          {/* if message type is pre approved then show the dropdown for selecting template */}
          {messageType === 'pre-approved' && (
            <div className="mt-4 ">
              <Label
                htmlFor="template-name"
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                Template Name{' '}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Select>
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="template1">
                    Template 1
                  </SelectItem>
                  <SelectItem value="template2">
                    Template 2
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* if message type is pre approved then show the media url and media file */}
          {contentType == 'pre-approved' && (
            <div className="mt-6">
              <Label className="text-sm font-medium text-gray-700">
                Upload Media File
              </Label>
              <div className="mt-1 text-sm text-gray-500">
                <div>
                  Supported file type :{' '}
                  {getFileTypeInfo().supported}
                </div>
                <div>Maximum file size : 5 MB</div>
              </div>
              <Button className="mt-3 w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600">
                <Upload className="h-4 w-4 mr-2" />
                Upload From Media Library
              </Button>

              <div className="flex items-center my-4">
                <Separator className="flex-grow" />
                <span className="px-3 text-sm text-gray-500">
                  or
                </span>
                <Separator className="flex-grow" />
              </div>

              <Label
                htmlFor="media-url"
                className="text-sm font-medium text-gray-700"
              >
                Media URL
              </Label>
              <Input
                id="media-url"
                value={mediaUrl}
                onChange={(e) =>
                  setMediaUrl(e.target.value)
                }
                className="mt-1"
              />
              <Button
                variant="outline"
                size="sm"
                className="mt-2 text-blue-600 border-blue-600"
              >
                Add Variable
              </Button>
            </div>
          )}

          {/* if message type is preapproved show var names */}
          {messageType === 'pre-approved' && (
            <div className="mt-6">
              <Label className="text-sm font-medium text-gray-700">
                Values
              </Label>
              <div className="space-y-3 mt-2">
                {variables.map((variable, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <Label
                        htmlFor={`var-name-${index}`}
                        className="text-sm font-medium flex items-center"
                      >
                        Variable Name{' '}
                        <span className="text-red-500 ml-1">
                          *
                        </span>
                      </Label>
                      <Input
                        id={`var-name-${index}`}
                        value={variable.name}
                        onChange={(e) =>
                          handleVariableChange(
                            index,
                            'name',
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor={`var-value-${index}`}
                        className="text-sm font-medium flex items-center"
                      >
                        Value{' '}
                        <span className="text-red-500 ml-1">
                          *
                        </span>
                      </Label>
                      <Input
                        id={`var-value-${index}`}
                        value={variable.value}
                        onChange={(e) =>
                          handleVariableChange(
                            index,
                            'value',
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* if regular message then show radio types text ,image,video,document */}
          {messageType === 'regular' && (
            <div className="mt-4">
              <Label className="text-sm font-medium text-gray-700">
                Type
              </Label>
              <RadioGroup
                value={contentType}
                onValueChange={setContentType}
                className="flex flex-wrap gap-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="text" id="text" />
                  <Label htmlFor="text">Text</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="image"
                    id="image"
                  />
                  <Label htmlFor="image">Image</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="video"
                    id="video"
                  />
                  <Label htmlFor="video">Video</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="document"
                    id="document"
                  />
                  <Label htmlFor="document">Document</Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* if content type is not text show the upload media and media url  */}
          {contentType !== 'text' && (
            <div className="mt-6">
              <Label className="text-sm font-medium text-gray-700">
                Upload Media File
              </Label>
              <div className="mt-1 text-sm text-gray-500">
                <div>
                  Supported file type :{' '}
                  {getFileTypeInfo().supported}
                </div>
                <div>Maximum file size : 5 MB</div>
              </div>
              <Button className="mt-3 w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600">
                <Upload className="h-4 w-4 mr-2" />
                Upload From Media Library
              </Button>

              <div className=" my-4 w-[20%] mx-auto">
                <span className="px-3 text-sm text-gray-500">
                  or
                </span>
              </div>

              <Label
                htmlFor="media-url"
                className="text-sm font-medium text-gray-700"
              >
                Media URL
              </Label>
              <Input
                id="media-url"
                value={mediaUrl}
                onChange={(e) =>
                  setMediaUrl(e.target.value)
                }
                className="mt-1"
              />
              <Button
                variant="outline"
                size="sm"
                className="mt-2 text-blue-600 border-blue-600"
              >
                Add Variable
              </Button>
            </div>
          )}

          {/* if message is regular and type is text show message body */}
          {(contentType === 'text' ||
            messageType === 'regular') && (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="message-body"
                  className="text-sm font-medium text-gray-700 flex items-center"
                >
                  Message Body{' '}
                  <span className="text-red-500 ml-1">
                    *
                  </span>
                </Label>
                <span className="text-sm text-gray-500">
                  0/4096
                </span>
              </div>
              <div className="mt-1 relative">
                <Textarea
                  id="message-body"
                  placeholder="Enter your message here"
                  value={messageBody}
                  onChange={(e) =>
                    setMessageBody(e.target.value)
                  }
                  className="min-h-[120px] resize-none"
                />

                <div className="absolute bottom-3 left-3 flex space-x-3 text-gray-500">
                  <button className="hover:text-gray-700 font-bold">
                    B
                  </button>
                  <button className="hover:text-gray-700 italic">
                    I
                  </button>
                  <button className="hover:text-gray-700 underline">
                    U
                  </button>
                  <button className="hover:text-gray-700">
                    <Smile className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Preview Div */}
        <div className="relative mt-6 p-4 bg-white rounded-md max-lg:w-full w-[50%] h-fit ">
          
          {/* Logo */}
          <div className=" absolute z-99 h-8 w-8 rounded-full  flex items-center justify-center text-white">
            <Image
              src="/whatsapp.svg"
              height={40}
              width={40}
              alt="whatsapp"
            />
          </div>

          <div className="relative ml-3 bg-white p-3 rounded-lg shadow-lg w-full">
            {contentType === 'document' ? (
              <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg">
                <div className="h-16 w-16 text-gray-400 mb-2">
                  <Image
                    src="/document.svg"
                    width={60}
                    height={60}
                    alt="pdf"
                  />
                </div>
              </div>
            ) : contentType === 'image' ? (
              <div className="rounded-lg ">
                <Image
                  src="/Frame 2865.png"
                  width={500}
                  height={500}
                  alt="immage"
                />
              </div>
            ) : contentType === 'pre-approved' ? (
              <div className="rounded-lg ">
                <Image
                  src="/Frame 2865.png"
                  width={500}
                  height={500}
                  alt="immage"
                />
              </div>
            ) : null}
            <p className="text-sm mt-2 ">
              Hi {'{1}'}, please find details in attached
              pdf as discussed over call and click on demo
              link to explore demo. id :demo password : 1289
            </p>
            <p className="text-sm mt-1">
              Thank You {'{2}'}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end p-6 border-t">
        <Button variant="outline" className="mr-2">
          Cancel
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600">
          Save
        </Button>
      </div>
    </>
  );
};

export default WelcomeForm;
