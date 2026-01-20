import React, { useState } from 'react';
import InputSection from './components/InputSection';
import LetterPreview from './components/LetterPreview';
import { generateLetter } from './templates';
import './index.css';

function App() {
  const [mode, setMode] = useState('college');
  const [formData, setFormData] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    if (!letterContent) return;
    try {
      const response = await fetch('http://localhost:5000/api/letters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          data: formData,
          content: letterContent
        })
      });
      if (response.ok) {
        alert('Letter saved successfully!');
      } else {
        alert('Failed to save letter.');
      }
    } catch (error) {
      console.error('Error saving letter:', error);
      alert('Error connecting to server.');
    }
  };

  const letterContent = generateLetter(mode, formData);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Leave Letter Generator</h1>
        <p>Select your category and generate a formal letter instantly.</p>
      </header>

      <main className="main-content">
        <InputSection
          mode={mode}
          formData={formData}
          onChange={handleInputChange}
          setMode={setMode}
        />
        <div className="preview-container">
          <LetterPreview letterContent={letterContent} />
          <button className="save-btn" onClick={handleSave} style={{
            marginTop: '1rem',
            width: '100%',
            padding: '1rem',
            background: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Save Letter to Database
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
