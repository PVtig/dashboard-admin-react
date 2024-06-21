import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const Cars = () => {
  const src = 'http://localhost/car'
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
  axios
    .get(src)
    .then(resalt => {
      setArticles(resalt.data);
    })  
  },[]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "number",
      headerName: "Number",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Type",
      type: "type",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "mileage",
      headerName: "Mileage",
      flex: 1,
    },
    {
      field: "garage_id",
      headerName: "Garage",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="CARS" subtitle="Managing the Cars" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          }
        }}
      >
        <DataGrid 
        checkboxSelection 
        rows={articles} 
        columns={columns} 
        components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Cars;
