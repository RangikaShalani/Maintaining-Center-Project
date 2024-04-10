import * as React from "react";
import "../App.css";
import "../components/style/components.css";
import { FaArrowCircleUp } from "react-icons/fa";

function CallUsBtn() {
    return (
        <div className="call-us-btn-cmp">
            <button>Call Us on <span className="call-us-call-btn-number">(651) 917-0192 </span><FaArrowCircleUp className="call-us-call-icon" /></button>
        </div>
    );
}

export default CallUsBtn;
