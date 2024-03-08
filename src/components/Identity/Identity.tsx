import { Typography } from "@mui/material";
import React from "react";


interface IdentityProps {
    img1: string;
    name: string;
}

const Identity: React.FC<IdentityProps>  = ({img1, name}) => {
    return (
        <div>
        <div style={{ position: 'relative', width: '100%', paddingTop: 16, marginBottom: '5px' }}>
            <div style={{ textAlign: 'center' }}>
                <img src={img1} alt="" />
            </div>
         
        </div>

        <Typography textAlign={"center"} sx={{ fontSize: '20px', fontFamily: 'Inter', fontWeight: 500, color: '#1A1A1B' }} component="div">
            {name}
        </Typography>

        
    </div>
    );
};

export default Identity;