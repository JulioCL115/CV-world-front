import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import getAllLanguagesUnfiltered from "../../redux/actions/languages/getAllLanguagesUnfiltered";
import deleteLanguage from "../../redux/actions/languages/deleteLanguage";
import restoreLanguage from "../../redux/actions/languages/restoreLanguage";

import { Box, IconButton, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function AdminLanguages() {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.languages.allLanguagesUnfiltered);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getAllLanguagesUnfiltered());
  }, [dispatch]);

  console.log(languages);

  const onDelete = async (e, params) => {
    await deleteLanguage(params.id);
    dispatch(getAllLanguagesUnfiltered());
  };

  const onRestore = async (e, params) => {
    await restoreLanguage(params.id);
    dispatch(getAllLanguagesUnfiltered());
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 400,
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
            component={Link}
            to={`/admin/updatelanguage/${params.row.id}`}
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
        marginTop="45px"
      >
        Idiomas
      </Typography>
      <Box display="flex" justifyContent="start" marginTop="50px">
        <Button
          component={Link}
          to="/admin/createlanguage"
          variant="contained"
          sx={{
            backgroundColor: "#098D85",
            '&:hover': {
              backgroundColor: "#098D85",
            }
          }}
        >
          Crear Idioma
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
          "& .MuiDataGrid-sortIcon": {
            color: `${colors.white[500]} !important`,
          },
          "& .MuiDataGrid-menuIcon": {
            color: `${colors.white[500]} !important`,
          },
        }}
      >
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', width: 'auto' }}>
          <DataGrid
            width="auto"
            rows={languages ? languages : []}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
            checkboxSelection
          />
        </div>
      </Box>
    </Box>
  );
};

export default AdminLanguages;



