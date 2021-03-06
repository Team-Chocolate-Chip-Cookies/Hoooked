import React from "react";
import "./AllUsersData.css";
import { Col, Row, Container } from "../../components/Grid";

const AllUsersData = (props) => (

    <div>

        <div className="card">
            <div className="card-body">
                <Row>
                    <Col size="md-4">
                        <i class="fas fa-user fa-3x"></i>
                    </Col>
                    <Col size="md-4">
                        <p>{props.name} </p>
                    </Col>
                    <Col size="md-4">
                        <button
                            className="btn btn-primary"
                            onClick={() => props.clickController(props.following,props.id)}>
                            {props.following}  <i className={props.following=="Follow" ? "far fa-thumbs-up" : "far fa-thumbs-down"}></i>
                            {/* {props.following}  <i className="far fa-thumbs-up"></i> */}
                        </button>
                    </Col>
              
                </Row>

            </div>
        </div>
          {/* <div class="modal fade" id={"modal" + props.index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Followed!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        You are now able to set {props.name} on the hook!
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div> */}



        {/* <div className="modal fade" id={"modal2" + props.index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Unfollowed!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        You are no longer following {props.name}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>  */}


   
         </div>
    // </div>

);

export default AllUsersData;
