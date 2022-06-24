import React from "react";

import "./Profile.css";

function Profile() {
  return (
    <section className="profile-container">
      <div className="profile-content">
        <h2>Luis</h2>
        <table className="profile-table">
			<tbody>
          <tr>
            <th>Points:</th>
            <td>90</td>
          </tr>
          <tr>
            <th>Games Played:</th>
            <td>1</td>
          </tr>
          <tr>
            <th>Correct answers:</th>
            <td>18</td>
          </tr>
		  </tbody>
        </table>
      </div>
    </section>
  );
}

export default Profile;
