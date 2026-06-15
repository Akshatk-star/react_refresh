import axios from 'axios'

const App = () => {
    const getdata= async ()  => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.data)
    }
  return (
    <div>
      <button onClick={getdata} className='w-30 h-30 bg-red-300 font-bold text-white'>Click Me </button>
    </div>
  )
}

export default App
