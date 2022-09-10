import React from "react";

export const InfoCard = ({ border, title, infos }) => {
  return (
    <div className={`card w-100 h-100 ${!border ? "border-0" : ""}`}>
      <div className="card-body ">
        {title && <h5 className="card-title border-bottom pb-1">{title}</h5>}
        <div className=" text-sm">
          {Object.entries(infos).map((info, index) => (
            <div className="row mb-1" key={index}>
              <div className="col-3">
                <p className="text-capitalize" style={{ fontWeight: "bold" }}>
                  {info[0]}:
                </p>
              </div>
              <div className="col">
                {info[0].toLowerCase() === "website" ? (
                  <a
                    href="https://www.google.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {info[1]}
                  </a>
                ) : (
                  <p className="text-capitalize">{info[1]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
