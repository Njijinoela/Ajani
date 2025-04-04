import { useState } from "react";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, summary, content }),
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Publish New Article</h1>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="border p-2"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 h-32"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Admin;
