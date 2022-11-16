import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <ToastContainer />
      <Container maxWidth="md">
        <Navbar />
        <Container style={{ margin: "30px auto" }} maxWidth="sm">
          <AllRoutes />
        </Container>
      </Container>
    </>
  );
}

export default App;
