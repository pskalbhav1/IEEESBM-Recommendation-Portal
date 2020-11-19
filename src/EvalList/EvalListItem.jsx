import React from "react";

export default function EvalListItem({
  id,
  firstname,
  lastname,
  reasoning_marks,
  cs_ans_link,
  cs_ans_marks,
  elec_ans_link,
  elec_ans_marks,
}) {
  const styles = { backgroundColor: "#333", color: "#fefefe" };

  const clickHandler = () => {
    window.location = `#/users/${id}/show`;
  };

  return (
    <div
      style={reasoning_marks && elec_ans_marks && cs_ans_marks ? styles : null}
      className="students__item students__item--eval"
    >
      <h2 className="students__name">
        {id + ". " + firstname + " " + lastname}
      </h2>
      <span>
        <label htmlFor={id + "reason"}>Reasoning</label>
        <input checked={reasoning_marks} type="checkbox" id={id + "reason"} />
      </span>
      <span style={{ opacity: !elec_ans_link ? "0" : "1" }}>
        <label htmlFor={id + "elec"}>Electronics</label>
        <input checked={elec_ans_marks} type="checkbox" id={id + "elec"} />
      </span>
      <span style={{ opacity: !cs_ans_link ? "0" : "1" }}>
        <label htmlFor={id + "cs"}>CS</label>
        <input checked={cs_ans_marks} type="checkbox" id={id + "cs"} />
      </span>

      <button onClick={clickHandler} className="students__item-btn">
        View
      </button>
    </div>
  );
}
