import { useEffect } from "react";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/slicers/postSlice";

const Cards = () => {
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const errorMessage = useSelector((state) => state.posts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className=" max-w-7xl flex justify-around flex-wrap gap-[15px] mx-auto p-5">
      {status === "pending" ? (
        <h2>Загрузка...</h2>
      ) : status === "fulfilled" ? (
        posts.map((post) => <Card key={post.id} post={post} />)
      ) : status === "rejected" ? (
        <h2>{errorMessage}</h2>
      ) : (
        <h2>Ошибка!</h2>
      )}
    </div>
  );
};

export default Cards;
