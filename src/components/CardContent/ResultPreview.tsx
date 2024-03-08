import { Typography } from "@mui/material";
import React from "react";
import "./CardContent.css";


interface resultProps {
    img: string;
    title: string;
}

const ResultPreview: React.FC<resultProps> = ({ img, title }) => {
    return (
        <div className="card-content" style={{display:'flex', alignItems:'center', gap: '25px'}}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <Typography style={{ color: '#1A1A1B', fontSize: '14px', fontFamily: 'Inter' }}>
                    {title}
                </Typography>
            </div>
        </div>
    );
};

export default ResultPreview;