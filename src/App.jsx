import React from "react";

function App() {
  return (
    <div>
      <div className="text-white flex justify-between text-[30px] mt-[15px] pl-[15px] bg-[crimson]">
        <h1 className="text-red-100">Nooty</h1>
        <ul className="text-white flex gap-[20px] list-none mr-[30px] mt-[15px]">
          <li>Home</li>
          <li>Menu</li>
          <li>About </li>
          <li>Content </li>
        </ul>
      </div>
      <div className="flex justify-evenly">
        <div className="title">
          <h2 className="text-[50px] mt-[100px]">Suad Sald</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /> Provident quam tempora temporibus eum ipsum adipisci ut iste
            sequi amet est?
          </p>
          <button className="bg-[crimson] p-[15px] rounded-full border-2 text-white mt-[20px]">
            Download MY CV
          </button>
        </div>
        <img
          className="rounded-full w-[300px] h-[300px] mt-[30px]"
          src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=ais"
          alt=""
        />
      </div>

      <div className="bg-[crimson] p-[30px] mt-[30px] text-white text-[20px] text-center">
        {" "}
        Built in React
      </div>
    </div>
  );
}

export default App;
