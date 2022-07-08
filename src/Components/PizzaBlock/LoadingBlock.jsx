import React from 'react';
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <li>
            <ContentLoader 
                speed={2}
                width={285}
                height={530}
                viewBox="0 0 275 530"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="135" cy="135" r="135" /> 
                <rect x="0" y="291" rx="3" ry="3" width="275" height="24" /> 
                <rect x="0" y="335" rx="6" ry="6" width="275" height="98" /> 
                <rect x="1" y="465" rx="0" ry="0" width="72" height="26" /> 
                <rect x="117" y="456" rx="16" ry="16" width="157" height="42" />
            </ContentLoader>
        </li>
    )
}

export default LoadingBlock;
