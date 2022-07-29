import React from "react";
import { API } from "../config";

const MostrarImg = ({ item, url }) => {
  return (
    <div className="product-img">
      <img
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        className="mb3 img-cont"
        style={{ maxHeight: "600px", maxwidth: "300px" }}
      />
    </div>
  );
};

export default MostrarImg;