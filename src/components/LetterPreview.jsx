import React from 'react';

const LetterPreview = ({ letterContent }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(letterContent);
        alert("Letter copied to clipboard!");
    };

    return (
        <div className="preview-section">
            <div className="preview-header">
                <h3>Preview</h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="copy-btn" onClick={() => window.print()}>
                        Print
                    </button>
                    <button className="copy-btn" onClick={handleCopy}>
                        Copy Text
                    </button>
                </div>
            </div>
            <div className="paper">
                <pre className="letter-content">{letterContent}</pre>
            </div>
        </div>
    );
};

export default LetterPreview;
