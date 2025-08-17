import useAuth from "../../store/useAuth";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <button
      onClick={() => logout()}
      className="px-4 py-2 bg-red-600 text-white font-medium rounded-md shadow hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
};

export default Logout;
