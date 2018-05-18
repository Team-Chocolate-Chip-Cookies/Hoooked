import React from "react";


// Destructuring the type, className, children and onClick props, applying them to the button element
const Button2 = ({ type = "default", className, children, onClick, props }) => (
  <div>
    <button
      onClick={onClick}
      className={["btn btn-lg btn-primary",props, `btn-${type}`, "center", className].join(" ")}
      data-toggle="modal"
      data-target="#modal3"
    >
      {children}
    </button>

    <div class="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">

          <div class="modal-body">
            hook is now set!
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Button2;