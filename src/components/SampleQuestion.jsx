import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import "./SampleQuestionsPage.css"; // Import your CSS

const SampleQuestionsPage = () => {
  const [code, setCode] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCheckSolution = () => {
    setShowAnswer(true);
  };

  const handleClosePopup = () => {
    setShowAnswer(false);
  };

  return (
    <div className="sample-questions-page">
      <h1>Sample Questions</h1>

      <div className="content-container">
        {/* Left Side: Question Description */}
        <div className="question-section">
          <h2>Question 1</h2>
          <p>Write a function in JavaScript to reverse a string.</p>
          <p>
            <strong>Example:</strong>
            <br />
            Input: <code>"hello"</code>
            <br />
            Output: <code>"olleh"</code>
          </p>
        </div>

        {/* Right Side: Code Editor */}
        <div className="editor-section">
          <CodeMirror
            value={code}
            height="100%"
            extensions={[javascript()]}
            onChange={(value) => setCode(value)}
            theme="dark"
          />
          <button className="check-solution-btn" onClick={handleCheckSolution}>
            Check Solution
          </button>
        </div>
      </div>

      {/* Answer Pop-up */}
      <div className={`answer-popup ${showAnswer ? "active" : ""}`}>
        <div className="popup-content">
          <h3>Correct Answer</h3>
          <pre>
            <code>
              {`function reverseString(str) {
  return str.split('').reverse().join('');
}`}
            </code>
          </pre>
          <button className="close-btn" onClick={handleClosePopup}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SampleQuestionsPage;
