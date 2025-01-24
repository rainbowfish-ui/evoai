import React from "react";

const MeetingNotes = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-start flex-col">
      <div className="h-full w-full bg-gradient-to-t from-[#f5f5f5] to-white min-h-screen flex items-center justify-start flex-col rounded-3xl gap-3 text-center">
        <h4 className="text-7xl font-semibold gradient_text">
          We take your notes <br />
          you run the show
        </h4>
        <p className="text-sm ">
          Get insights from multiple meetings in seconds. <br />
          EvoAI provides customizable insights and analytics to help you make
          better decisions.
        </p>
      </div>
    </div>
  );
};

export default MeetingNotes;
