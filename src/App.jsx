import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <motion.div
      initial={{ backgroundColor: "#ffffff" }}
      animate={{ backgroundColor: backgroundColor }}
      transition={{ type: "spring", delay: 0.5 }}
      className="bg-container w-screen min-h-screen relative grid place-items-center"
    >
      <div className="color-picker-container rounded-md absolute bottom-12 bg-white shadow-md p-4">
        <form className="inline-block">
          <label htmlFor="favcolor" style={{ color: backgroundColor }}>
            Select your favorite color:
          </label>
          <input
            className="p-1 m-2"
            type="color"
            id="favcolor"
            name="favcolor"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </form>
      </div>
    </motion.div>
  );
}

export default App;
