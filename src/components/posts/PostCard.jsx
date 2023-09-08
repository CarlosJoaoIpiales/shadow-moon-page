function PostCard({ post }) {
    return (
      <div className="m-10">
        <div className="grid grid-cols-[30fr,70fr]">
          <div className="w-773 h-225 m-auto">
            <img className="w-150 h-230" src={post.entry.images.jpg.image_url} alt="" />
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h1 className="text-xl font-bold capitalize mt-5">{post.entry.title}</h1>
            <p className="text-gray-500 text-sm">{post.review}</p>
            <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400">
              Eliminar Tarea
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default PostCard;
  