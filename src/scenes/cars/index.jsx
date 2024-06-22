import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

import EngineeringIcon from '@mui/icons-material/Engineering';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

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
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === 1
                ? colors.blueAccent[600]
                : status === 2
                ? colors.greenAccent[600]
                : status === 3
                ? colors.orangeAccent[600]
                : status === 4
                ? colors.redAccent[600]
                : status === 5
                ? colors.primary[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {status === 1 && <AccessibleForwardIcon />}
            {status === 2 && <CheckIcon />}
            {status === 3 && <EngineeringIcon />}
            {status === 4 && <ReportProblemIcon />}
            {status === 5 && <ClearIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
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
