import React, { useState } from "react";

function Card() {
  const [card, setCard] = useState(true);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleImage = (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCard(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setCard(true);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col  mt-40 border border-gray-300  w-[20%] h-64">
          <div className="h-full ">
            <input type="file" onChange={handleImage} />
            {image && (
              <img
                src={image}
                alt="selected"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <hr />
          <div className="h-[30%]">
            <input
              type="text"
              placeholder="Enter the description"
              className="w-full h-full text-sm font-mono p-1 bg-slate-200"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white rounded-sm shadow-md p-1"
          >
            Add Card
          </button>
        </div>

        {card ? (
          <div className="m-auto mt-60">No Card</div>
        ) : (
          <div className="flex flex-col m-auto mt-40 border border-gray-300  w-[20%] h-56 rounded-lg shadow-md">
            <div className="h-full ">
              {image && (
                <img
                  src={image}
                  alt="selected"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <hr />
            <div className="h-[30%] font-mono bg-slate-200">
            <input
              type="text"
              placeholder="Enter the description"
              className="w-full h-full text-sm font-mono p-1 bg-slate-200"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <button
              onClick={handleClick}
              className="bg-blue-600 text-white rounded-sm p-1 shadow-md "
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-purple-600 text-white rounded-sm p-1 shadow-lg"
            >
              Delete
            </button>
          </div>
        )}
        <div className="p-2 ">
          <h3 className="font-bold">Comments</h3>
          <form
            onSubmit={handleAddComment}
            className="flex flex-col space-y-2 mt-2"
          >
            <input
              type="text"
              placeholder="Add a comment"
              value={commentText}
              onChange={handleCommentChange}
              className="border border-gray-300 rounded p-1"
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded-sm shadow-md p-1"
            >
              Add Comment
            </button>
          </form>
          <ul className="mt-2 space-y-1">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded p-1 bg-white"
              >
                {comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
