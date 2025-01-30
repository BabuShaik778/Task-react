import React, { useState } from 'react';
import { Button, Input, Card } from '@shadcn/ui';

const GreetingPage = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = async () => {
    setGreeting('Hello ${name}!');
  };

  return (
    <div className="greeting-page">
      <Card>
        <h1>Enter Your Name</h1>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <Button onClick={handleSubmit}>Submit</Button>
        {greeting && <p>{greeting}</p>}
      </Card>

      <Card>
        <h2>Explanation</h2>
        <p>
          This page contains a simple form where users can input their name. Upon submission, the page sends a request
          to the server (simulated here by setting the greeting message in state) and returns a greeting message.
        </p>
        <p>
          We're using Shadcn UI for the Input, Button, and Card components. The key feature of this app is using
          React's useState to manage the name input and the greeting message dynamically.
        </p>
      </Card>
    </div>
  );
};

export default Greetingpage;