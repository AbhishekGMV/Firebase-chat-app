import Header from "./Header";
import SignIn from "./SignIn";
import "../styles/App.css";
import { AuthProvider } from "../contexts/AuthContext";
import Chatroom from "./Chatroom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <AuthProvider>
      <div className="App container">
        <div className="chat-box">
          <Header />
          {user ? <Chatroom /> : <SignIn />}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
