import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader size={50} color="#3f51b5" />
    </div>
  );
};

export default Loader;
