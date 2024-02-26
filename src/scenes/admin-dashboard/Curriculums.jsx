import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import getAllCvsUnfiltered from "../../redux/actions/cvs/getAllCvsUnfiltered";
import deleteUser from "../../redux/actions/users/deleteUser";
import restoreUser from "../../redux/actions/users/restoreUser";
import getUserById from "../../redux/actions/users/getUserById";
import ProfilePciture from "./../../assets/blank-profile-picture-973460_960_720.webp"


import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function AdminCurriculums() {
  const dispatch = useDispatch();
  const cvs = useSelector((state) => state.cvs.allCvsUnfiltered);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getAllCvsUnfiltered());
  }, [dispatch]);

  console.log(cvs);

  const onDelete = (e, params) => {
    dispatch(deleteUser(params.userID));
  };

  const onRestore = (e, params) => {
    dispatch(restoreUser(params.userID));
  };

  const onEdit = (e, params) => {
    dispatch(getUserById(params.userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "image",
      headerName: "Imagen",
      width: 100,
      renderCell: (params) => (
        <img src={params.row.image ? params.row.image : ProfilePciture} alt="User Photo" style={{ width: '30px', height: '30px', borderRadius: "50%", objectFit: "cover" }} />
      ),
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
      valueGetter: (params) => params.row.contact[0]?.location || '',
    },
    {
      field: "contact.email",
      headerName: "Email",
      width: 400,
      valueGetter: (params) => params.row.contact[0]?.email || '',
    },
    {
      field: "contact.phone",
      headerName: "Nro. de teléfono",
      width: 200,
      valueGetter: (params) => params.row.contact[0]?.phone || '',
    },
    {
      field: "contact.website",
      headerName: "Sitio web",
      width: 400,
      valueGetter: (params) => params.row.contact[0]?.website || '',
    },
    {
      field: "experience",
      headerName: "Experiencia",
      width: 300,
      valueGetter: (params) => {
        let array = []

        params.row.experience.map((exp) => {
          let role = exp.role
          let responsibilities = exp.responsibilities
          let dateRange = exp.dateRange
          let company = exp.company

          return array.push(`${role} - ${company} -(${dateRange}) - ${responsibilities}, `)
        })
        return array
      }
    },
    {
      field: "education",
      headerName: "Educación",
      width: 300,
      valueGetter: (params) => {
        let array = []

        params.row.education.map((edu) => {
          let career = edu.career
          let dateRange = edu.dateRange
          let institution = edu.institution

          return array.push(`${career} - ${institution} -(${dateRange}), `)
        })
        return array
      }
    },
    {
      field: "skills",
      headerName: "Competencias",
      width: 200,
    },
    {
      field: "speakingLanguages",
      headerName: "Idiomas",
      width: 200,
    },
    {
      field: "otherInterests",
      headerName: "Otros intereses",
      width: 200,
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
        Curriculums
      </Typography>
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



