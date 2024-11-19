import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Wand2 } from 'lucide-react'

export default function TextInput() {
  const [text, setText] = useState('')
  const [audioUrl, setAudioUrl] = useState('')

  const handleGenerate = async () => {
    if (!text) {
      toast.error('Text is required')
      return
    }

    try {
      const response = await fetch('http://localhost:5000/api/voice/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })

      const data = await response.json()
      if (response.ok) {
        toast.success('Voice file generated successfully')
        setAudioUrl(data.audioUrl)
      } else {
        toast.error(data.error || 'Failed to generate voice file')
      }
    } catch (error) {
      toast.error('Failed to generate voice file')
      console.error('Fetch error:', error)
    }
  }

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Generate Voice from Text</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to synthesize..."
        className="block mb-4 p-4 border border-gray-300 rounded-lg w-full resize-none shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        rows={5}
      />
      <button
        onClick={handleGenerate}
        className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white py-3 px-4 rounded-lg font-semibold text-lg shadow-md hover:from-purple-500 hover:to-pink-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center justify-center"
      >
        <Wand2 className="w-5 h-5 mr-2" />
        Generate Voice
      </button>

      {audioUrl && (
        <div className="mt-6 text-center">
          <p className="text-lg font-medium text-gray-700 mb-4">Generated Audio:</p>
          <audio controls src={audioUrl} className="w-full">
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  )
}