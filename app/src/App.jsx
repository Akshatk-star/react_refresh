import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  async function bringer() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=12`
    );

    setData(response.data);
  }

  useEffect(() => {
    bringer();
  }, [page]);

  return (
    <div className="h-screen w-screen overflow-auto bg-gray-900">
      <div className="flex justify-center gap-4 py-4">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          className="bg-red-500 px-4 py-2 text-white rounded"
        >
          Previous
        </button>

        <span className="text-white text-xl">Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          className="bg-green-500 px-4 py-2 text-white rounded"
        >
          Next
        </button>
      </div>

      <div className="flex flex-wrap w-full">
        {data.map((item) => (
          <img
            key={item.id}
            className="m-2 object-cover h-48 w-95"
            src={item.download_url}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default App;