import React from "react";
import "./Work.css";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

function Work() {
  return (
    <div className="work">
      <div className="work-container">
        {/* <h2>Work Experience (2.5 years)</h2> */}
        <div className="work-header">
          <HiOutlineOfficeBuilding /> Wipro Technologies{" "}
          <i>(June 2019 - Present)</i>
        </div>
        <div className="work-desc">
          <p>
            Project Name : <strong>Cloud Email Security (CESv2)</strong>
          </p>
          <p>
            Customer : <strong>CISCO Systems</strong>
          </p>
          <p>
            About Project :{" "}
            <strong>
              Cisco Email Security (CESv2) is a new generation email security
              product owned by CISCO. This CESv2 web product is completely based
              on the cloud which helps admins to monitor, quarantine, and
              configure the incoming and outgoing emails within the
              organization.
            </strong>
          </p>
          <p>
            Role : <strong>UI Developer</strong>
          </p>
          <p>
            Team Size : <strong>20</strong>
          </p>
          <p>
            Methodology : <strong>Agile</strong>
          </p>
          <p>
            Responsibilities
            <ul>
              <li>
                <strong>
                  {" "}
                  Developing new screens based on invision wireframes provided
                  with all the functionalities which legacy ESA/SMA application
                  has.
                </strong>
              </li>
              <li>
                <strong>
                  {" "}
                  Following standard CISCO user interface guidelines which
                  include atomic design rules and other standards.
                </strong>
              </li>
              <li>
                <strong>
                  Updating task status regularly in Rally for better tracking
                </strong>
              </li>
              <li>
                <strong>
                  Fixing the bugs raised by the testing team and updating CDETS.
                </strong>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
