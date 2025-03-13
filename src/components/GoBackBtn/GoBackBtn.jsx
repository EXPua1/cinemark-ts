import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import css from "./GoBackBtn.module.css";

const GoBackBtn = ({ defaultPath = "/" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from;

  const handleGoBack = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение Link
    if (backLink) {
      // Если есть предыдущая страница в state
      navigate(backLink);
    } else if (location.key !== "default") {
      // Если есть история навигации
      navigate(-1);
    } else {
      // Если нет истории - идем на defaultPath
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