import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import getAllCvs from "../../redux/actions/cvs/getAllCvs";
import deleteUser from "../../redux/actions/users/deleteUser";
import restoreUser from "../../redux/actions/users/restoreUser";
import getUserByEmail from "../../redux/actions/users/getUserByEmail";

import { Box, IconButton, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/admin-dashboard/Header";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function AdminUsers() {
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
      flex: 0.5
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "contact",
      headerName: "Contacto",
      flex: 1,
    },
    {
      field: "photo",
      headerName: "Imagen",
      flex: 1,
    },
    {
      field: "deleted",
      headerName: "",
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
    <Box m="20px" width="100%">
      <Header
        title="Curriculums"
      />
      <Box display="flex" justifyContent="end" mt="20px" >
        <Button
          component={Link}
          to="/admin/users/createcv"
          variant="contained"
        >
          Crear nuevo usuario
        </Button>
      </Box>
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
            color: colors.green[500],
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
            color: `${colors.green[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.purple[500]} !important`,
          },
        }}
      >
        <DataGrid
          rows={cvs ? cvs : []}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default AdminUsers;



