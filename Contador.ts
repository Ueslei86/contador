import React, { useEffect } from 'react';

interface TextInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextInputProps> = ({ value, onChange }) => {
    
    const [wordCount, setWordCount] = React.useState(0);
    const [charCount, setCharCount] = React.useState(0);

    React.useEffect(() => {
        const countWords = (text) => {
            let wordcount = text.split(' ').length;
            return wordcount;
        };

        const countChars = (text) => {
            let charcount = text.split('').filter(char => char !== ' ').length;
            return charcount;
        };

        onChange(countWords(value));
        onChange(countChars(value));
    }, [onChange, value]);

    return (
        <div className="text-area-container">
            <div className="text-area">
                <textarea value={value} onChange={onChange} />
            </div>
            <div className="word-count">
                <p>{wordCount} palavras</p>
            </div>
            <div className="char-count">
                <p>{charCount} caracteres</p>
            </div>
        </div>
    );
};

export default TextArea;

//Aplicar estilizações:

.text-area-container {
    display: flex;
    flex-direction: row;
}

.text-area {
    width: flex-end;
}

.text-area p, .word