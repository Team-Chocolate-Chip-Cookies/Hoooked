import React from "react";
import "./AllUsersData.css";


const AllUsersData = (props) => (

    <div className="card-body">
        <p>{props.name}</p>
        <button 
        className="btn btn-primary" data-toggle="modal" data-target={"#modal"+props.index}
        onClick={() => props.clickFollow(props.id)}>
        Follow
        </button>

        <div class="modal fade" id={"modal"+props.index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        </div>
        <button className="btn btn-primary" data-toggle="modal" data-target={"#modal2"+props.index}>Unfollow</button>
        
        <div class="modal fade" id={"modal2"+props.index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Unfollowed!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                You are no longer following {props.name}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>

        <hr />
    </div>


);

export default AllUsersData;
