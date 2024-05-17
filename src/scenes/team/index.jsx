import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import EngineeringIcon from '@mui/icons-material/Engineering';
import Header from "../../components/Header";
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import { useEffect, useState } from "react";
import axios from "axios";

const Team = () => {
  const src = 'http://localhost/user'
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
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "surname",
      headerName: "Surname",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "salary",
      headerName: "Salary",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { type } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              type === 1
                ? colors.greenAccent[600]
                : type === 2
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {type === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {type === "manager" && <SecurityOutlinedIcon />}
            {type === "user" && <LockOpenOutlinedIcon />}
            {type === 1 && <AccessibleForwardIcon />}
            {type === 2 && <EngineeringIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {type}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
        }}
      >
        <DataGrid checkboxSelection rows={articles} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
