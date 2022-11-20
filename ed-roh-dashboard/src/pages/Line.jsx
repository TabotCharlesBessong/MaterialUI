import { Box } from "@mui/material";
import {Head,LineChart} from "../components";

const Line = () => {
  return (
    <Box m="20px">
      <Head title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;