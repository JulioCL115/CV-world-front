import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import deleteSubscription from "../../redux/actions/subscriptions/deleteSubscription";
import updateSubscription from "../../redux/actions/subscriptions/updateSubscription";
import getAllCategories from "../../redux/actions/categories/getAllCategories";


import { Box, IconButton, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function AdminCategories() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.allCategories);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    console.log(categories);

    const onDelete = (e, params) => {
        dispatch(deleteSubscription(params.userID));
    };

    const onRestore = (e, params) => {
        dispatch(updateSubscription(params.userID));
    };

    const onEdit = (e, params) => {
        dispatch(updateSubscription(params.userID));
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
            width: 400,
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
                Categorías
            </Typography>
            <Box display="flex" justifyContent="end">
                <Button
                    component={Link}
                    to="/admin/users/createcv"
                    variant="contained"
                >
                    Crear Categoría
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
                        rows={categories ? categories : []}
                        columns={columns}
                        slots={{ Toolbar: GridToolbar }}
                        checkboxSelection
                    />
                </div>
            </Box>
        </Box>
    );
};

export default AdminCategories;



