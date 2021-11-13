import React from "react";
import "./Work.css";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

function Work() {
  return (
    <div className="work">
      <div className="work-container">
        {/* <h2>Work Experience (2.5 years)</h2> */}

        <div className="work-desc">
          <div className="work-header">
            <HiOutlineOfficeBuilding className="work-icon" /> Wipro Technologies
            (June 2019 - Present)
          </div>
          <p>
            Project Name : <strong>Cisco Email Security (CESv2)</strong>
          </p>
          <p>
            Customer : <strong>CISCO Systems</strong>
          </p>
          <p>
            About Project :{" "}
            <strong>
              Cisco Email Security (CESv2) is a new generation email security
              product owned by CISCO. This CESv2 web product is completely cloud
              based aplication which helps admins/users to monitor, quarantine,
              scan and configure the incoming and outgoing emails within the
              organization.It is the best defense against phishing, business
              email compromise (BEC), malware, and ransomwares.
            </strong>
          </p>
          <p>
            Role : <strong>UI Developer</strong>
          </p>
          <p>
            Team Size : <strong>12</strong>
          </p>
          <p>
            Methodology : <strong>Agile</strong>
          </p>
          <p>
            Responsibilities :
            <ul>
              <li>
                <strong>
                  {" "}
                  Involving in requirement analysis for new feature
                  implementations.
                </strong>
              </li>
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
                  Writing unit tests and doing reviewing the team members code
                  to maintain good and healthy codebase.
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
                  Attending Scrum call and updating task status regularly in
                  Rally for better tracking.
                </strong>
              </li>
              <li>
                <strong>
                  Fixing the bugs raised by the testing team / Customers and
                  updating CDETS tool.
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
