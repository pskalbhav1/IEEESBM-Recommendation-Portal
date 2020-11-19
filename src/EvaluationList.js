import React, { useState, useEffect, useContext } from "react";
import "./StudentList.css";

// import { StudentContext } from "../Context/Contexts";

import data from "./test2.js";
import EvalListItem from "./EvalListItem";

export default function StudentList1() {
  // const [students, dispatch] = useContext(StudentContext);

  // console.log(students);

  // const [data, setData] = useState(() => {
  //   // const value = students.map(kid=>{...kid.user,})
  // });

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [filterd, setFilterd] = useState([]);

  useEffect(() => {
    setFilterd(
      data.filter((kid) => {
        const searchString = Object.keys(kid).reduce(
          (total, current) => total + " " + kid[current]
        );

        // CHECK THIS WONT WORK

        return searchString.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search]);

  return (
    <div className="students">
      <h1 className="students__heading">Evaluation List</h1>
      <div className="students__list">
        <div className="students__top">
          <input
            placeholder="Search for Name/Domain/Stream"
            type="text"
            className="students__search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="students__list-container">
          {filterd
            .slice((currentPage - 1) * 8, currentPage * 8)
            .map((kid, index) => {
              // return <StudentItem {...kid} key={index} />;
              return <EvalListItem {...kid} />;
            })}
        </div>
        <div className="students__bottom">
          <div
            onClick={() => setCurrentPage((old) => old - 1)}
            className={
              currentPage === 1
                ? "students__pag students__pag--disabled students__pag--prev"
                : "students__pag students__pag--prev"
            }
          >
            <i class="fas fa-angle-left"></i>
          </div>

          {[...Array(Math.ceil(filterd.length / 8))].map((_, i) => {
            let classes = "students__pag";
            if (currentPage === i + 1) {
              classes += " students__pag--active";
            }
            return (
              <div onClick={() => setCurrentPage(i + 1)} className={classes}>
                {i + 1}
              </div>
            );
          })}

          <div
            onClick={() => setCurrentPage((old) => old + 1)}
            className={
              currentPage === Math.ceil(filterd.length / 8)
                ? "students__pag students__pag--disabled students__pag--prev"
                : "students__pag students__pag--next"
            }
          >
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
