import BarLoader from "react-spinners/BarLoader";
import { MAIN_COLOR } from "../../config";
import layoutStyles from "../../styles/layout.module.css";

const ProcessingAnimation = ({ isLoading, title, description }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className={layoutStyles.loader}>
      <div className={layoutStyles.loadingAnimation}>
        <h3 className="mb-4 text-center font-display text-2xl text-jacarta-700 dark:text-white">
          {title}
        </h3>
        <BarLoader
          color={MAIN_COLOR}
          loading={isLoading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="mt-4 text-center font-display text-l text-black dark:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessingAnimation;
