import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import { setFeedback } from "../../store/ui/feedbackSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";

const Navbar = (): React.ReactElement => {
  const { removeLocalStorageItem } = useLocalStorage();
  const dispatch = useDispatch();
  const isAuthenticated = useAppSelector((state) => state.userStore.isLogged);

  const handleLogout = () => {
    removeLocalStorageItem("token");
    dispatch(logoutUserActionCreator());
    dispatch(
      setFeedback("You have been successfully logged out. See you next time!")
    );
  };

  return (
    <NavbarStyled>
      {isAuthenticated ? (
        <>
          <NavLink className="nav-link" to="/create">
            Create
          </NavLink>
          <button className="nav-link" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink className="nav-link" to="/login">
            LOGIN
          </NavLink>
          <NavLink className="nav-link" to="/register">
            SIGN UP
          </NavLink>
        </>
      )}
      <BurgerMenu></BurgerMenu>
    </NavbarStyled>
  );
};

export default Navbar;
