import React, { useState } from 'react';
import './App.css';

export default function Home({ navigation }) {
  const puzzle = [
    ["C", "R", "Y", "P", "T", "O", "G", "R", "A", "P", "H", "Y"],
    ["S", "E", "C", "U", "R", "I", "T", "Y", "A", "B", "C", "D"],
    ["E", "N", "C", "O", "D", "I", "N", "G", "E", "F", "G", "H"],
    ["D", "E", "C", "O", "D", "I", "N", "G", "I", "J", "K", "L"],
    ["E", "N", "C", "R", "Y", "P", "T", "I", "O", "N", "M", "N"],
    ["D", "E", "C", "R", "Y", "P", "T", "I", "O", "N", "O", "P"],
    ["C", "I", "P", "H", "E", "R", "T", "E", "X", "T", "Q", "R"],
    ["P", "L", "A", "I", "N", "T", "E", "X", "T", "S", "T", "U"],
    ["P", "U", "B", "L", "I", "C", "K", "E", "Y", "V", "W", "X"],
    ["P", "R", "I", "V", "A", "T", "E", "K", "E", "Y", "Y", "Z"],
    ["C", "I", "P", "H", "E", "R", "A", "U", "T", "H", "E", "N"],
    ["A", "T", "T", "A", "C", "K", "B", "C", "D", "E", "F", "G"],
   
  ];

  const targetWords = [
    "CRYPTOGRAPHY", "SECURITY", "ENCODING", "DECODING", "ENCRYPTION", "DECRYPTION", "CIPHERTEXT", "PLAINTEXT", "PUBLICKEY", "PRIVATEKEY", "CIPHER", "ATTACK"
  ];

  const definitions = {
    CRYPTOGRAPHY: "CRYPTOGRAPHY: The science of securing communication and data through the use of codes and ciphers.",
    SECURITY: "SECURITY: Measures taken to protect data and communications from unauthorized access or alterations.",
    ENCODING: "ENCODING: The process of converting data into a different format using a scheme that is publicly available.",
    DECODING: "DECODING: The process of converting encoded data back to its original format using the appropriate scheme.",
    ENCRYPTION: "ENCRYPTION: The process of converting plaintext into ciphertext using a key to prevent unauthorized access.",
    DECRYPTION: "DECRYPTION: The process of converting ciphertext back into plaintext using a key.",
    CIPHERTEXT: "CIPHERTEXT: The encrypted form of plaintext that is unreadable without the appropriate decryption key.",
    PLAINTEXT: "PLAINTEXT: The original, readable form of data before it is encrypted.",
    PUBLICKEY: "PUBLICKEY: A key used in asymmetric cryptography that is shared publicly and used for encryption.",
    PRIVATEKEY: "PRIVATEKEY: A key used in asymmetric cryptography that is kept secret and used for decryption.",
    CIPHER: "CIPHER: An algorithm used to perform encryption and decryption.",
    ATTACK: "ATTACK: An attempt to gain unauthorized access to data or disrupt communication security."
  };

  const [selectedLetters, setSelectedLetters] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [currentDefinition, setCurrentDefinition] = useState('');

  const handleLetterPress = (letter, rowIndex, colIndex) => {
    const cellKey = `${rowIndex}-${colIndex}`;
    if (selectedCells.includes(cellKey)) {
      setSelectedLetters((prev) => prev.filter((item) => item.rowIndex !== rowIndex || item.colIndex !== colIndex));
      setSelectedCells((prev) => prev.filter((key) => key !== cellKey));
    } else {
      setSelectedLetters((prev) => [...prev, { letter, rowIndex, colIndex }]);
      setSelectedCells((prev) => [...prev, cellKey]);
    }
  };

  const checkWord = () => {
    const selectedWord = selectedLetters.map((item) => item.letter).join('');
    console.log('Selected Word:', selectedWord);
    if (targetWords.includes(selectedWord) && !foundWords.includes(selectedWord)) {
      setFoundWords([...foundWords, selectedWord]);
      setCurrentDefinition(definitions[selectedWord]);
      alert(`Success, you found the word: ${selectedWord}`);
    } else if (!targetWords.includes(selectedWord)) {
      alert(`Try Again, the word: ${selectedWord} is not correct.`);
    }
    setSelectedLetters([]);
    setSelectedCells([]);
  };

  const handleRiddlesButton = () => {
    navigation.navigate('Question_1');
  };

  return (
    <div className="App">
      <h1>Interactive Cryptography Word Search</h1>
      <div className="content">
        <div className="sidebar">
          <h2>Find these frequently used words in cryptography<br/>and hit search to know more:</h2>
          <ul>
            {targetWords.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
        <div className="puzzleContainer">
          <div className="grid">
            {puzzle.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((letter, colIndex) => {
                  const cellKey = `${rowIndex}-${colIndex}`;
                  const isSelected = selectedCells.includes(cellKey);
                  return (
                    <div
                      key={colIndex}
                      className={`cell ${isSelected ? 'selectedCell' : ''}`}
                      onClick={() => handleLetterPress(letter, rowIndex, colIndex)}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <button className="checkButton" onClick={checkWord}>Check Word</button>
        </div>
        <div className="definition">
         
          <p>{currentDefinition}</p>
          <button className="riddlesButton" onClick={handleRiddlesButton}>Click here to solve cryptography riddles</button>
        </div>
      </div>
    </div>
  );
}
