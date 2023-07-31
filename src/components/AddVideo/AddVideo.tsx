import React from 'react';
const AddVideo = () => {
  return (
    <div className="flex items-center justify-center mt-[100px]">
      <iframe
        id="ytplayer"
        width="540"
        height="300"
        src="https://www.youtube.com/embed/UHxGKJMX5hw"
        frameBorder="0"
      />
    </div>
  );
};
export default AddVideo;
