
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedBackStat from "./components/FeedBackStat";
import Header from "./components/Header";

import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedBackStat />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default App;
