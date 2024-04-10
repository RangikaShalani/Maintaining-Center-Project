import * as React from "react";
import "../App.css";
import "../components/style/components.css";

function AnimationAddressBar() {
    return (
        <div className="marquee_container">
            <div className="marquee">
                <div className="marquee_group">
                    <span className="animation-adress-bar-tex">ARRIVE IN LESS THAN 30 MINS </span>
                    <span className="header-call-btn-number" >CALL (651) 917-0192 </span>
                    <span className="animation-adress-bar-tex">24/7 SERVICE</span>
                </div>
                <div className="marquee_group">
                <span className="animation-adress-bar-tex">ARRIVE IN LESS THAN 30 MINS </span>
                    <span className="header-call-btn-number" >CALL (651) 917-0192 </span>
                    <span className="animation-adress-bar-tex">24/7 SERVICE</span>
                </div>
            </div>
        </div>
    );
}

export default AnimationAddressBar;
