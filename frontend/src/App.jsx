import React from 'react'
import FileUpload from './components/FileUpload'
import TextInput from './components/TextInput'
import { Toaster } from 'react-hot-toast'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <Toaster />
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
        Voice Synthesizer
      </h1>
      <div className="w-full max-w-4xl space-y-8">
        <FileUpload />
        <TextInput />
      </div>
    </div>
  )
}