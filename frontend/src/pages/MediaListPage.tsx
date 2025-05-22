import { useState } from "react";
import { useMedia, type MediaItem } from "../context/MediaContext";

const emptyItem: MediaItem = {
  id: 0,
  type: "movie",
  title: "",
  creator: "",
  releaseDate: "",
};

export default function MediaListPage() {
  const { media, addMedia, editMedia, deleteMedia } = useMedia();
  const [form, setForm] = useState<MediaItem>(emptyItem);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      editMedia(form);
    } else {
      addMedia({ ...form, id: Date.now() });
    }
    setForm(emptyItem);
    setIsEditing(false);
  };

  const handleEdit = (item: MediaItem) => {
    setForm(item);
    setIsEditing(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Media Collection</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 rounded">
          <option value="movie">Movie</option>
          <option value="music">Music</option>
          <option value="game">Game</option>
        </select>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 rounded" />
        <input name="creator" value={form.creator} onChange={handleChange} placeholder="Creator" className="w-full p-2 rounded" />
        <input type="date" name="releaseDate" value={form.releaseDate} onChange={handleChange} className="w-full p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {isEditing ? "Update" : "Add"} Media
        </button>
      </form>

      <ul className="space-y-2">
        {media.map((item) => (
          <li key={item.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{item.title} ({item.type})</div>
              <div className="text-sm text-gray-500">{item.creator} - {item.releaseDate}</div>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(item)} className="px-2 py-1 bg-yellow-400 text-white rounded">Edit</button>
              <button onClick={() => deleteMedia(item.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
