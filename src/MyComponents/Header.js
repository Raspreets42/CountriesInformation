import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

export default function Header() {
    function myRefresh() {
        window.location.reload(false);
    }
    return (
        <div className="col-12 col-md-8 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <i class="fas fa-snowflake"></i> Miskaa <i class="fas fa-snowflake"></i>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form class="d-flex" id="refreshing">
                            <button class="btn btn-success" type="submit" onClick={myRefresh}>Refresh</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div >
    )
}
