// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import getAllUsers from "../../redux/actions/users/getAllUsers";

// import { Box } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import Header from "../../components/admin-dashboard/Header";
// import { tokens } from "./theme";
// import { useTheme } from "@mui/material";


// function AdminUsers() {
//     const dispatch = useDispatch();
//     const users = useSelector((state) => state.users.allUsers);
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);

//     useEffect(() => {
//         dispatch(getAllUsers());
//     });
    

//     console.log(users);

//     const columns = [
//         {
//             field: "id",
//             headerName: "ID",
//             flex: 0.5
//         },
//         {
//             field: "name",
//             headerName: "Nombre",
//             flex: 1,
//             // cellClassName: "name-column--cell",
//         },
//         {
//             field: "email",
//             headerName: "Email",
//             flex: 1,
//         },
//         {
//             field: "photo",
//             headerName: "Imagen",
//             flex: 1,
//         },
//         {
//             field: "deleted",
//             headerName: "Eliminado",
//             flex: 1,
//         },
//         {
//             field: "role",
//             headerName: "Role",
//             flex: 1,
//         },
//         {
//             field: "delete",
//             headerName: "Eliminar",
//             width: 50,
//             renderCell: (params) => {
//               return (
//                 <IconButton onClick={(e) => onDelete(e, params.row)}>
//                   <DeleteIcon />
//                 </IconButton>
//               );
//             },
//           },
//           {
//             field: "restore",
//             headerName: "Restaurar",
//             width: 50,
//             renderCell: (params) => {
//               return (
//                 <IconButton onClick={(e) => onRestore(e, params.row)}>
//                   <RestoreIcon />
//                 </IconButton>
//               );
//             },
//           },
//           {
//             field: "edit",
//             headerName: "Editar",
//             width: 50,
//             renderCell: (params) => {
//               return (
//                 <IconButton
//                   onClick={(e) => onEdit(e, params.row)}
//                   component={Link}
//                   to="/users/form/update"
//                 >
//                   <EditIcon />
//                 </IconButton>
//               );
//             },
//           },
//     ];

//     return (
//         <Box m="20px">
//             <Header
//                 title="Users"
//                 subtitle="List of Contacts for Future Reference"
//             />
//             <Box
//                 m="40px 0 0 0"
//                 height="75vh"
//                 sx={{
//                     // "& .MuiDataGrid-root": {
//                     //     border: "none",
//                     // },
//                     // "& .MuiDataGrid-cell": {
//                     //     borderBottom: "none",
//                     // },
//                     // "& .name-column--cell": {
//                     //     color: colors.greenAccent[300],
//                     // },
//                     // "& .MuiDataGrid-columnHeaders": {
//                     //     backgroundColor: colors.blueAccent[700],
//                     //     borderBottom: "none",
//                     // },
//                     // "& .MuiDataGrid-virtualScroller": {
//                     //     backgroundColor: colors.primary[400],
//                     // },
//                     // "& .MuiDataGrid-footerContainer": {
//                     //     borderTop: "none",
//                     //     backgroundColor: colors.blueAccent[700],
//                     // },
//                     // "& .MuiCheckbox-root": {
//                     //     color: `${colors.greenAccent[200]} !important`,
//                     // },
//                     // "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//                     //     color: `${colors.grey[100]} !important`,
//                     // },
//                 }}
//             >
//                 <DataGrid
//                     checkboxSelection
//                     rows={users ? users : []}
//                     columns={columns}
//                     components={{ Toolbar: GridToolbar }}
//                 />
//             </Box>
//         </Box>
//     );
// };

// export default AdminUsers;



