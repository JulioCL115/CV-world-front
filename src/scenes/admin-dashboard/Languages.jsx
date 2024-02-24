import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import getAllLanguages from "../../redux/actions/languages/getAllLanguages";
import deleteLanguage from "../../redux/actions/languages/deleteLanguage";
import updateLanguage from "../../redux/actions/languages/updateLanguage";


import { Box, IconButton, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function AdminLanguages() {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.languages.allLanguages);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getAllLanguages());
  }, [dispatch]);

  console.log(languages);

  const onDelete = (e, params) => {
    dispatch(deleteLanguage(params.userID));
  };

  const onRestore = (e, params) => {
    dispatch(updateLanguage(params.userID));
  };

  const onEdit = (e, params) => {
    dispatch(updateLanguage(params.userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 200,
      cellClassName: "name-column--cell",
    },
    {
      field: "deleted",
      headerName: "Deshabilitado",
      width: 150,
    },
    {
      field: "delete",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        return (
          <IconButton onClick={(e) => onDelete(e, params.row)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        );
      },
    },
    {
      field: "restore",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        return (
          <IconButton onClick={(e) => onRestore(e, params.row)}>
            <RestoreOutlinedIcon />
          </IconButton>
        );
      },
    },
    {
      field: "edit",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        return (
          <IconButton
            onClick={(e) => onEdit(e, params.row)}
            component={Link}
            to="/users/form/update"
          >
            <EditOutlinedIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box
      height="auto"
      width="auto"
      display="flex"
      flexDirection="column"
      p={2}>
      <Typography
        variant="h1"
        color={colors.black[500]}
        fontWeight="600"
      >
       Idiomas
      </Typography>
      <Box display="flex" justifyContent="end">
        <Button
          component={Link}
          to="/admin/users/createcv"
          variant="contained"
        >
          Crear nuevo usuario
        </Button>
      </Box>
      <Box
        pt={4}
        pl={4}
        height="75vh"
        display="flex" // Enable flexbox
        justifyContent="flex-start" // Center content horizontally
        flexGrow={1}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.green[500],
            fontWeight: "400",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.purple[500],
            borderBottom: "none",
            color: colors.white[500],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.white[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.white[500],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.green[400]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.purple[500]} !important`,
          },
        }}
      >
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', width: 'auto' }}>
          <DataGrid
            width="auto"
            rows={languages ? languages : []}
            columns={columns}
            slots={{ Toolbar: GridToolbar }}
            checkboxSelection
          />
        </div>
      </Box>
    </Box>
  );
};

export default AdminLanguages;



