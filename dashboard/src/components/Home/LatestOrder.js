
import React from "react";
import { Link } from "react-router-dom";


const LatestOrder = (props) => {
 
  return (
    <div className="card-body">
      <h4 className="card-title">New orders</h4>
        <div className="table-responsive">
          <table className="table">
            <tbody>
                <tr>
                  <td>
                    <b>User</b>
                  </td>
                  <td>user@exemple.com</td>
                  <td>345dt</td>
                  <td>
                      <span className="badge rounded-pill alert-success">
                        Paid At Today at 10:30 AM
                      </span>
                  </td>
                  <td> Today at 10:30 AM</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/order`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>


                <tr>
                  <td>
                    <b>User</b>
                  </td>
                  <td>user@exemple.com</td>
                  <td>345dt</td>
                  <td>
                      <span className="badge rounded-pill alert-danger">
                        Created At Today at 10:30 AM
                      </span>
                  </td>
                  <td> Today at 10:30 AM</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/order`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default LatestOrder;
