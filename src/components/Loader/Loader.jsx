import { BallTriangle } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="rgb(138, 55, 100)"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass={css.loaderWrapper}
        visible={true}
      />
    </div>
  );
}
