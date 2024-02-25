import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import getAllCvs from "../../redux/actions/cvs/getAllCvs";
import deleteUser from "../../redux/actions/users/deleteUser";
import restoreUser from "../../redux/actions/users/restoreUser";
import getUserByEmail from "../../redux/actions/users/getUserById";

import { Box, IconButton, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function AdminCurriculums() {
  const dispatch = useDispatch();
  const cvs = useSelector((state) => state.cvs.allCvs);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getAllCvs());
  }, [dispatch]);

  console.log(cvs);

  const onDelete = (e, params) => {
    dispatch(deleteUser(params.userID));
  };

  const onRestore = (e, params) => {
    dispatch(restoreUser(params.userID));
  };

  const onEdit = (e, params) => {
    dispatch(getUserByEmail(params.userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "photo",
      headerName: "Imagen",
      width: 100,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 200,
      cellClassName: "name-column--cell",
    },
    {
      field: "contact.location",
      headerName: "Ubicación",
      width: 200,
      valueGetter: (params) => params.row.contact?.location || '',
    },
    {
      field: "contact.email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "contact.phone",
      headerName: "Nro. de teléfono",
      width: 200,
    },
    {
      field: "contact.website",
      headerName: "Sitio web",
      width: 200,
    },
    {
      field: "experience",
      headerName: "Experiencia",
      flex: 1,
    },
    {
      field: "education",
      headerName: "Educación",
      flex: 1,
    },
    {
      field: "skills",
      headerName: "Competencias",
      flex: 1,
    },
    {
      field: "speakingLanguages",
      headerName: "Idiomas",
      flex: 1,
    },
    {
      field: "otherInterests",
      headerName: "Otros intereses",
      flex: 1,
    },
    {
      field: "deleted",
      headerName: "Deshabilitado",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
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
       Curriculums
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
            rows={cvs ? cvs : []}
            columns={columns}
            slots={{ Toolbar: GridToolbar }}
            checkboxSelection
          />
        </div>
      </Box>
    </Box>
  );
};

export default AdminCurriculums;



