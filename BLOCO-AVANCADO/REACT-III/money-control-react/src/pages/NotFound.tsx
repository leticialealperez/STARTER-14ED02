import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Grid
      container
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Grid item>
        <Typography variant="h3" color="initial">
          Page Not Found
        </Typography>
        <Button variant="text" color="primary">
          <Link to="/">Home</Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default NotFound;
