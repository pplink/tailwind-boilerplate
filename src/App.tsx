import React, { useState, useEffect } from "react";

const icons = [
  /* eslint-disable react/jsx-key */
  <box-icon type="solid" name="wink-smile" color="currentColor" />,
  <box-icon type="solid" name="pencil" color="currentColor" />,
  <box-icon type="solid" name="image" color="currentColor" />,
  <box-icon type="solid" name="message-rounded-dots" color="currentColor" />,
  <box-icon type="solid" name="microphone" color="currentColor" />,
  <box-icon type="solid" name="video" color="currentColor" />,
  /* eslint-enable react/jsx-key */
];

function App() {
  const [iconIndex, setIconIndex] = useState(0);
  useEffect(() => {
    const animationDelay = 200;
    const nextIconTimer = setTimeout(() => {
      const nextIconIndex = iconIndex + 1;
      if (nextIconIndex >= icons.length) {
        setIconIndex(0);
      } else {
        setIconIndex(nextIconIndex);
      }
    }, animationDelay);
    return () => {
      clearTimeout(nextIconTimer);
    };
  }, [iconIndex]);
  return (
    <div className="fixed inset-0 bg-gray-100 flex">
      <div className="rounded-full bg-white w-12 h-12 m-auto flex items-center justify-center">
        {icons[iconIndex]}
      </div>
    </div>
  );
}

export default App;
