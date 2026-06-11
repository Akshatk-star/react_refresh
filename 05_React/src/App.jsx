import React, { useState } from 'react';

const App = () => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const [savedNotes, setSavedNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.title.trim() && !note.content.trim()) return;

    setSavedNotes((prev) => [...prev, note]);

    setNote({
      title: '',
      content: '',
    });
  };

  const deleteNote = (index) => {
    const newNotes = [...savedNotes];
    newNotes.splice(index, 1);

    setSavedNotes(newNotes);
  };

  return (
    <div className="bg-slate-900 min-h-screen p-10 text-white">
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold text-center">
            Notes App
          </h1>

          <input
            type="text"
            placeholder="Enter title..."
            value={note.title}
            onChange={(e) =>
              setNote({ ...note, title: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder:text-gray-400"
          />

          <textarea
            rows={5}
            placeholder="Write your note..."
            value={note.content}
            onChange={(e) =>
              setNote({ ...note, content: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 resize-none"
          />

          <button
            type="submit"
            className="bg-amber-300 text-black font-semibold rounded-lg py-3 hover:bg-amber-400"
          >
            Save Note
          </button>
        </form>

        {/* Active Notes */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Active Notes
          </h2>

          <div className="flex flex-col gap-4">
            {savedNotes.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-amber-300">
                  {item.title}
                </h3>

                <p className="mt-2">
                  {item.content}
                </p>

                <button
                  onClick={() => deleteNote(index)}
                  className="mt-4 bg-red-500 px-4 py-2 rounded-lg font-semibold"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Deleted Notes */}
        {deletedNotes.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              Deleted Notes
            </h2>

            <div className="flex flex-col gap-4">
              {deletedNotes.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-700 p-6 rounded-2xl opacity-75"
                >
                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;