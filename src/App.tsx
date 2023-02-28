import { TopBar, TwoColumnLayout, Occastions, Everyday } from "./components";
import { occasions, everydayOccasion } from "./types";

function App() {
  return (
    <>
      <TopBar />
      <TwoColumnLayout
        leftColumnContent={<Occastions occasions={occasions} />}
        rightColumnContent={<Everyday occasion={everydayOccasion} />}
      />
    </>
  );
}

export default App;
