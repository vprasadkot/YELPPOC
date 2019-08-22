import React from "react";

const BusinessDetails = props => {
  console.log("props", props);
  const details = props.details;
  return (
    <div className="row">
      <div className="thumb">
        <img src={details.image_url} alt={details.name} />
      </div>
      <div className="details">
        <h3>{details.name}</h3>
        <span className="col">
          <b>Rating :</b> {details.rating}
        </span>
        <span className="col">
          <b>Phone :</b> {details.display_phone}
        </span>
        <details>
          <b>Address:</b>
          {details &&
            details.location &&
            details.location.display_address.join("\n")}
        </details>
        <aside>
          <b>Categories: </b>
          {details &&
            details.categories.map(category => {
              return <span className="token">{category.title}</span>;
            })}
        </aside>
      </div>
    </div>
  );
};

export default BusinessDetails;
