import Cards from "./comonents/Cards";
import More from "./comonents/More";
import { useDispatch } from "react-redux";
import { searchPost } from "./store/slicers/postSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="py-2 px-4 min-w-[300px] border-black border w-4/12 rounded-lg my-0 mx-auto block mt-5 "
        onChange={(e) => {
          dispatch(searchPost(e.target.value));
        }}
      />
      <Cards />
      <More />
    </div>
  );
}

export default App;
