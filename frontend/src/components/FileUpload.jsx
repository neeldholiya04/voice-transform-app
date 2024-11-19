import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Upload } from 'lucide-react'

export default function FileUpload() {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch(`https://voice-transform-app.onrender.com/api/voice/upload`, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (response.ok) {
        toast.success('File uploaded successfully')
      } else {
        toast.error(data.error || 'Upload failed')
      }
    } catch (error) {
      toast.error('Upload failed')
      console.error('Fetch error:', error)
    }
  }

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Upload Voice File</h2>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">Audio files (MP3, WAV, etc.)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept="audio/*" />
        </label>
      </div>
      {file && <p className="mt-2 text-sm text-gray-500 text-center">{file.name}</p>}
      <button
        onClick={handleUpload}
        className="w-full mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold text-lg shadow-md hover:from-green-500 hover:to-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Upload File
      </button>
    </div>
  )
}