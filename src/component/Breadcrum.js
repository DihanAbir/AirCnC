import Breadcrumb from "react-bootstrap/Breadcrumb";

import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function Breadcrum(props) {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  // console.log(pathnames);

  return (
    <div className="container breadcrumb">
      <Breadcrumb>
        <Link onClick={() => history.push("/")}>Home</Link>
        {pathnames.map((name, index) => {
          const routeto = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <Link
              className="Link text-white"
              onClick={() => {
                if (name != "singleService") history.push(routeto);
                else history.push("/");
              }}
            >
              / {name}
            </Link>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default withRouter(Breadcrum);
