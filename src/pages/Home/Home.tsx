import { Grid } from "@mui/material";
import CardPreview from "../../components/CardPreview/CardPreview";

const Home = () => {
    return (
        <Grid
        container
        // justifyContent="center"
        // alignItems="center"
        paddingTop={6}
        paddingLeft={25}
        paddingRight={10}
        // style={{  flexDirection: 'column' }}
    >
        <CardPreview/>
    </Grid>
    );
};

export default Home;