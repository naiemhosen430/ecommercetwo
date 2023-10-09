import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FooterBox({ options, boxName }) {
  const [option, setOptions] = useState([]);

  useEffect(() => {
    setOptions(options);
  }, [options]);
  return (
    <>
      <div className="lg:w-3/12 w-10/12 m-auto text-center lg:text-left">
        <ul>
          <h4 className="text-lg text-white font-bold p-1 py-2">{boxName}</h4>
          {option.map((item) => (
            <Link
              className="text-slate-400 block hover:text-white p-1"
              key={item}
              to={`/${item}`}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
