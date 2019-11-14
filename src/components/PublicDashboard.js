import React, { useState } from "react";
import { Link } from "react-router-dom";

function PublicDashboard() {  
    return(
        <div>
            <nav>
                <p>Dad Jokes</p>
                <image></image>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
            <h1>Hello Dad Jokes</h1>
            <section>
                <h1>Joke here template</h1>
            </section>
        </div>
        )
}

export default PublicDashboard;