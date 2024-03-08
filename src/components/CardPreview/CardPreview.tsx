import { Card, Divider } from "@mui/material";
import Identity from "../Identity/Identity";
import img1 from "../../assets/Avatar.png";
import ResultPreview from "../CardContent/ResultPreview";
import img2 from "../../assets/Icon Ribbon Add.png";
import GoalCompletion from "../CardContent/GoalCompletion";
import img3 from "../../assets/Icon Completed.png";
import Feedback from "../CardContent/Feedback";
import img4 from "../../assets/Icon Feeback Recevied.png";
import img5 from "../../assets/Icon Feeback Giver.png";

const CardPreview = () => {
    return (
        <div>
            <Card sx={{ minWidth: '250px', backgroundColor: '#FFFFFF' , padding: '20px'}} elevation={0}>

                <Identity img1={img1} name={'Kathryn Murphy'}></Identity>


                <Divider style={{ marginTop: 12}}></Divider>

                <div style={{ marginTop: 10, marginBottom: 12 }}>
                    <ResultPreview  img={img2} title="Review Result" ></ResultPreview>
                    <GoalCompletion img={img3} title="Goals Completed" num1={0} num2={1} ></GoalCompletion>
                    <Feedback img={img4} title="Feedback Received" num={0}></Feedback>
                    <Feedback img={img5} title="Feedback Given" num={0}></Feedback>
                </div>
            </Card>
        </div>
    );
};

export default CardPreview;