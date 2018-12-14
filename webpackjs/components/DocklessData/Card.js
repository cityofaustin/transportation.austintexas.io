import React from "react";
import AnimatedNumber from "react-animated-number";
import { format } from "d3-format";
import axios from "axios";

import UpdateDate from "./UpdateDate";

const Card = ({ title, value, icon, resourceId, updateEvent }) => (
  <div
    className="col dash-panel h-100 p-2"
    id="dockless-trips-total-count"
    data-container="body"
    data-trigger="hover"
    data-toggle="popover"
    data-placement="top"
    data-content="# of total Dockless Mobility trips taken."
    data-original-title=""
    title=""
  >
    <div className="row dash-panel-header">
      <div className="col-1 dash-panel-icon">
        <h4>
          <i className={`fa fa-${icon}`} />
        </h4>
      </div>
      <div className="col dash-panel-title">
        <h4>{title}</h4>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <span className="info-metric-small">
          <AnimatedNumber
            value={value}
            style={{
              transition: "0.8s ease-out",
              transitionProperty: "color, opacity"
            }}
            frameStyle={perc => (perc === 100 ? {} : { color: "#E5E5E5" })}
            duration={300}
            formatValue={n => format(",d")(n)}
          />
        </span>
      </div>
    </div>
    <UpdateDate updateEvent={updateEvent} resourceId={resourceId} />
  </div>
);

export default Card;
