import { Box } from "@mui/material";
import Header from "../../components/Header";
import FuelChart from "../../components/FuelChart";

const FuelBar = () => {
  return (
    <Box m="20px">
      <Header title="fuel" subtitle="Fuel" />
      <Box height="75vh">
        <FuelChart />
      </Box>
    </Box>
  );
};

export default FuelBar;
