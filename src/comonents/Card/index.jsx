import { useDispatch } from "react-redux";
import { openModalMore, findPost } from "../../store/slicers/postSlice";
import { getUser } from "../../store/slicers/userSlice";

const Card = ({ post }) => {
  const dispatch = useDispatch();
  const openMore = (event) => {
    event.preventDefault();
    dispatch(openModalMore());
    dispatch(getUser(post.userId));
    dispatch(findPost({ id: post.id }));
  };

  return (
    <div className="border-[1px] w-72 p-[10px] flex justify-between flex-col text-center">
      <h2 className="text-xl mb-2.5">{post.title}</h2>

      <p className="text-sm mb-5">{post.body}</p>
      <button
        onClick={openMore}
        className="bg-yellow-500  py-2 hover:bg-yellow-600 text-white"
      >
        Подробнее
      </button>
    </div>
  );
};

export default Card;
