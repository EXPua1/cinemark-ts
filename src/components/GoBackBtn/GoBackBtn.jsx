import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import css from "./GoBackBtn.module.css";

const GoBackBtn = ({ defaultPath = "/" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from;

  const handleGoBack = (e) => {
    e.preventDefault(); 
    if (backLink) {
     
      navigate(backLink);
    } else if (location.key !== "default") { 
      navigate(-1);
    } else {
      navigate(defaultPath);
    }
  };

  return (
    <Link
      onClick={handleGoBack}
      className={css.backBtn}
      title="Go back"
    >
      <FaArrowLeft />
      <span>Go back</span>
    </Link>
  );
};

export default GoBackBtn;