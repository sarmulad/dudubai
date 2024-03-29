import { Toaster } from "react-hot-toast";
import MayhavenRoutes from "Routes";
import { setProgramsVisible } from "utils/functions";

function App() {
  return (
    <div
      className="bg-[#8100BE] min-h-screen"
      onClick={() => setProgramsVisible(false)}
      role="presentation"
    >
      <Toaster />
      <MayhavenRoutes />
    </div>
  );
}

export default App;
