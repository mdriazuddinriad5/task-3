import { Typography } from '@mui/material';
import React from 'react';
import "./CardContent.css";


interface GoalCompletionProps {
    img: string;
    title: string;
    num1: number;
    num2: number;
}

const GoalCompletion: React.FC<GoalCompletionProps> = ({ img, title, num1, num2 }) => {
    return (
        <div className='card-content' style={{display:'flex', alignItems:'center', justifyContent:"space-between", marginTop:8}}>
            <div style={{display:'flex', alignItems:'center', gap: '25px'}}>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <Typography style={{ color: '#1A1A1B', fontSize: '14px', fontFamily: 'Inter' }}>
                        {title}
                    </Typography>
                </div>
            </div>
            <div>

                <button style={{borderRadius:'60px', backgroundColor:'#FADAD2', border:'0'}}>

                    {num1 <= num2 ? `${num1}/${num2}` : 'Invalid Numbers'}


                </button>

            </div>
        </div>
    );
};

export default GoalCompletion;