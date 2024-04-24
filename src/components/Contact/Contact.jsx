import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <data className={css.data}>
        <p className={css.text}>
          <IoPerson /> {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt /> {number}
        </p>
      </data>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
