import css from "./LoadMoreBtn.module.css";

export default function Button({ children, onClick, disabled }) {
  return (
    <div className={css.btnWrapper}>
      <button className={css.button} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
