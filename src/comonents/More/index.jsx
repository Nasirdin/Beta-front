import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalMore } from "../../store/slicers/postSlice";

const More = () => {
  const [modal, setModal] = useState(false);
  const openMore = useSelector((state) => state.posts.openModal);
  const user = useSelector((state) => state.user.user);
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  useEffect(() => {
    setModal(openMore);
  }, [openMore]);

  if (!user) {
    return false;
  } else {
    return (
      <div
        onClick={() => {
          dispatch(openModalMore());
        }}
        className={` cursor-pointer w-screen h-screen fixed bg-[#00000090] top-0 left-0  ${
          !modal ? "hidden" : "block"
        }`}
      >
        <div className=" cursor-default min-w-[300px]  bg-white absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%]  p-5">
          <div className="pb-5 mb-5 border-b border-slate-600 ">
            <p>id: {post.id}</p>
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p className="text-sm">{post.body}</p>
          </div>
          <div className="">
            <p>Aвтор</p>
            <p>
              <span className="font-bold">userId: </span>
              {post.userId}
            </p>
            <p>
              <span className="font-bold">ФИО:</span> {user.name}
            </p>
            <p>
              <span className="font-bold">Ник: </span>
              {user.username}
            </p>
            <p>
              <span className="font-bold">Email: </span>
              {user.email}
            </p>
            <p>
              <span className="font-bold">Тел: </span>
              {user.phone}
            </p>
            <p>
              <span className="font-bold">Веб-сайт: </span>
              {user.website}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default More;
