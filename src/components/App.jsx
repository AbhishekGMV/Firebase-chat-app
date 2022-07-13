import Header from "./Header";
import SignIn from "./SignIn";
import { AuthProvider } from "../contexts/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import Chatroom from "./Chatroom";
import "../styles/App.css";

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
