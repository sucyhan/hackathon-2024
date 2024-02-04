import React, { useState } from 'react';
import axios from 'axios';
import OpenAI from 'openai';

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';
new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });

const ImageGenerator = () => {
  const [inputWord, setInputWord] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');

  const handleGenerateImage = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/dall-e/completions', // Replace with the correct endpoint if available
        {
          prompt: `Generate an image based on ${inputWord}`,
          // Add any other necessary parameters
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      setGeneratedImage(response.data.choices[0].image); // Adjust based on the actual API response
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div>
      <h1>Image Generator</h1>
      <input
        placeholder="Enter a word for image generation"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
      />
      <button onClick={handleGenerateImage}>Generate Image</button>
      {generatedImage && (
        <div>
          <h2>Generated Image</h2>
          <img src={generatedImage} alt="Generated Image" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
