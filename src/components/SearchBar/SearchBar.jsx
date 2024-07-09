import { toast } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleFormSubmit = (values, actions) => {
    if (values.query.trim() === "") {
      toast.error("Please enter text to search images!");
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <div className={css.SearchContainer}>
      <Formik initialValues={{ query: "" }} onSubmit={handleFormSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search by word..."
            name="query"
          />
          <button className={css.formBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
