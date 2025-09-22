import { useNavigate } from "react-router-dom";
import useAuth from "../../store/useAuth";


const Logout = () => {
  const navigate = useNavigate()
  const { logout} = useAuth();

  const user = localStorage.getItem("user");

  console.log("the value from the user ? ",user);

  return (
    <div>
      {user ? (
        <button
          onClick={() => logout()}
          className="px-4 py-2 bg-red-600 text-white font-medium rounded-md shadow hover:bg-red-700 transition"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate('/signin')}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-950 transition"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Logout;
