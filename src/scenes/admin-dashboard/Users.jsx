import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllUsersUnfiltered from "../../redux/actions/users/getAllUsersUnfiltered";
import deleteUser from "../../redux/actions/users/deleteUser";
import updateUser from "../../redux/actions/users/updateUser";
import restoreUser from "../../redux/actions/users/restoreUser";

import ProfilePciture from "./../../assets/blank-profile-picture-973460_960_720.webp"

import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function AdminUsers() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.allUsersUnfiltered);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = localStorageUser ? localStorageUser.id : null

    useEffect(() => {
        dispatch(getAllUsersUnfiltered());
    }, [dispatch]);

    console.log(localStorageUser);

    const onDelete = async (e, params) => {
        await deleteUser(params.id);
        dispatch(getAllUsersUnfiltered());

    };

    const onRestore = async (e, params) => {
        await restoreUser(params.id);
        dispatch(getAllUsersUnfiltered());
    };

    const onRoleChange = async (e, params) => {
        let role = params.role === "admin" ? "user" : "admin";

        let confirmationMessage = params.role === "admin" ?
            "¿Estás seguro que querés quitarle los permisos de administrador a este usuario?" :
            "¿Estás seguro que querés darle permisos de administrador a este usuario?";

        if (params.id === userId && params.role === "admin") {
            window.alert("No te podés quitar los permisos de administrador a vos mismo");
        } else {
            if (window.confirm(confirmationMessage)) {
                try {
                    await updateUser(params.id, { role: role });
                    dispatch(getAllUsersUnfiltered());
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 400,
        },
        {
            field: "photo",
            headerName: "Imagen",
            width: 100,
            renderCell: (params) => (
                <img src={params.row.photo ? params.row.photo : ProfilePciture} alt="User" style={{ width: '30px', height: '30px', borderRadius: "50%" }} />
            ),
        },
        {
            field: "name",
            headerName: "Nombre",
            width: 200,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            width: 350,
        },
        {
            field: "role",
            headerName: "Rol",
            width: 200,
            renderCell: (params) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={
                            colors.green[500]

                        }
                        borderRadius="4px"
                        onClick={(e) => onRoleChange(e, params.row)}
                    >
                        {params.row.role === "admin" && <AdminPanelSettingsOutlinedIcon style={{ color: 'white' }} />}
                        {params.row.role === "user" && <LockOutlinedIcon style={{ color: 'white', width: 20, height: 20 }} />}
                        <Typography color={colors.white[500]} sx={{ ml: "5px" }}>
                            {params.row.role}
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "deleted",
            headerName: "Deshabilitado",
            width: 150,
        },
        {
            field: "SubscriptionId",
            headerName: "ID Suscripción",
            width: 400,
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
                Usuarios
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
                        rows={users ? users : []}
                        columns={columns}
                        components={{
                            Toolbar: GridToolbar,
                        }}
                        checkboxSelection
                        showToolbar
                    />
                </div>
            </Box>
        </Box>
    );
};


export default AdminUsers;
