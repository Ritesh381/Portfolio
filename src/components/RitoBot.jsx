import { useState } from 'react';

export default function RitoBot() {
  const [messages, setMessages] = useState([
    { role: 'system', content: "You are RitoBot, a friendly and witty chatbot that knows everything about Ritesh Prajapati's portfolio. Answer casually, like a cool tech bro." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages })
    });

    const data = await res.json();
    setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">💬 Talk to RitoBot</h1>
      <div className="border rounded p-4 h-96 overflow-y-auto bg-gray-100 space-y-2">
        {messages.filter(m => m.role !== 'system').map((m, i) => (
          <div key={i} className={`p-2 rounded ${m.role === 'user' ? 'bg-white text-right' : 'bg-blue-100 text-left'}`}>
            <p><strong>{m.role === 'user' ? 'You' : 'RitoBot'}:</strong> {m.content}</p>
          </div>
        ))}
        {loading && <p className="text-sm text-gray-500">RitoBot is thinking...</p>}
      </div>
      <div className="flex mt-4 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-grow border rounded p-2"
          placeholder="Ask RitoBot anything..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
}