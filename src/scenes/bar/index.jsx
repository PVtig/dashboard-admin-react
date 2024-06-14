import { Box } from "@mui/material";
import Header from "../../components/Header";
import ProfitChart from "../../components/ProfitChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="profit" subtitle="Profit" />
      <Box height="75vh">
        <ProfitChart />
      </Box>
    </Box>
  );
};

export default Bar;
