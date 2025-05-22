import { useState } from "react";
import api from "../services/apiService";

export default function SmartRecommendPage() {
  const [titles, setTitles] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const titleArray = titles.split(",").map((t) => t.trim());
    const res = await api.post("/api/ai/recommend", { titles: titleArray });
    setResult(res.data.choices[0].message.content);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">AI Media Recommender</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={titles}
          onChange={(e) => setTitles(e.target.value)}
          placeholder="Enter titles separated by commas"
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Recommendations</button>
      </form>
      {result && <div className="mt-4 whitespace-pre-line bg-white p-4 rounded shadow">{result}</div>}
    </div>
  );
}
