import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const competitionDate = new Date("2025-04-17T00:00:00");
    const now = new Date();
    const difference = competitionDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome to Fix Fast</h1>
        <p>Test your skills, solve challenges, and win from the prize pool!</p>

        <div className="countdown-timer">
          <div className="timer-box">
            <span>{timeLeft.days || 0}</span>
            <span>Days</span>
          </div>
          <div className="timer-box">
            <span>{timeLeft.hours || 0}</span>
            <span>Hours</span>
          </div>
          <div className="timer-box">
            <span>{timeLeft.minutes || 0}</span>
            <span>Minutes</span>
          </div>
          <div className="timer-box">
            <span>{timeLeft.seconds || 0}</span>
            <span>Seconds</span>
          </div>
        </div>

        <div className="cta-buttons">
          <Link to="/register" className="cta-button">
            Register Now
          </Link>
          <Link to="/login" className="cta-button">
            Login to Participate
          </Link>
        </div>
      </section>

      <section className="overview">
        <h2>About the Competition</h2>
        <p>
          Fix Fast is an exciting and fast-paced debugging competition where
          participants must identify and fix errors in buggy code under time
          constraints. This contest is designed to test coding proficiency,
          problem-solving skills, logical reasoning, and debugging efficiency.
        </p>
      </section>

      <section className="sample-questions">
        <h2>Sample Questions</h2>
        <div className="questions-grid">
          <div className="question-card">
            <h3>Question 1</h3>
            <p>Solve this problem to test your skills.</p>
            <Link to="/sample-questions" className="view-more">
              View More
            </Link>
          </div>
          <div className="question-card">
            <h3>Question 2</h3>
            <p>Another challenging problem for you.</p>
            <Link to="/sample-questions" className="view-more">
              View More
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Fix Fast - Debug Competition. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
