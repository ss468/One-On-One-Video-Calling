import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();
  const [value, Setvalue] = useState();
  console.log("value is=>>>", value);
  const handleonclick = () => {
    navigate(`room/${value}`);
  };
  return (
    <>
      <div
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <input
    className="form-control"
    type="text"
    placeholder="Enter the room id here"
    onChange={(e) => Setvalue(e.target.value)}
    style={{ marginBottom: "20px", width: "300px" }}
  />
  <button className="btn btn-info" onClick={handleonclick}>
    JOIN
  </button>
</div>

    </>
  );
};

export default Home;
