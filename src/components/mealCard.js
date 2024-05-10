import { Box, Grid, Typography } from "@mui/material";

const MealCard = ({ data }) => {

  return (
    <Box
      sx={{
        border: "1px solid lightgrey",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <Grid container>
        <Grid item xs={5}>
          <Box component="img" src={data.image} />
        </Grid>
        <Grid item xs={7}>
          <Typography fontWeight={800}>{data.name}</Typography>
          <Typography>{data.description}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography sx={{ backgroundColor: "#179C78", color: "#FFFFFF" }}>
            400-800 Calories
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MealCard;
