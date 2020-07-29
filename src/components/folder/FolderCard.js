import React from "react";
import FolderImage from "./folder-image.png"
import "./Folder.css"


const FolderCard = (props) => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="img-container">
                    {/* I chose to make my folders clickable by wrapping the folder icon with a button here */}
                    <button type="button" 
                                onClick={() => {alert("View ImageList contained in this Folder")}}>
                            Folder
                        <img src={FolderImage} alt="folder" />
                    </button>
                    <div id="text" className="card-foldername"></div>
                </div>
            </div>
        </div>
    )
}

export default FolderCard;