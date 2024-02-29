import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import getAllSubscriptionsUnfiltered from "../../redux/actions/subscriptions/getAllSubscriptionsUnfiltered";
import deleteSubscription from "../../redux/actions/subscriptions/deleteSubscription";
import restoreSubscription from "../../redux/actions/subscriptions/restoreSubscription";

import { Box, IconButton, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function AdminSubscriptions() {
    const dispatch = useDispatch();
    const subscriptions = useSelector((state) => state.subscriptions.allSubscriptionsUnfiltered);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        dispatch(getAllSubscriptionsUnfiltered());
    }, [dispatch]);

    console.log(subscriptions);

    const onDelete = async (e, params) => {
         await deleteSubscription(params.id);
         dispatch(getAllSubscriptionsUnfiltered())
    };

    const onRestore = async(e, params) => {
        await restoreSubscription(params.id);
        dispatch(getAllSubscriptionsUnfiltered());
    };

    const columns = [
        {
            field: "name",
            headerName: "Nombre",
            width: 200,
            cellClassName: "name-column--cell",
        },
        {
            field: "price",
            headerName: "Precio",
            width: 100,
        },
        {
            field: "included",
            headerName: "Incluye",
            width: 300,
        },
        {
            field: "notIncluded",
            headerName: "No incluye",
            width: 300,
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
                        to={`/admin/updatesubscription/${params.row.id}`}
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
                Suscripciones
            </Typography>
            <Box display="flex" justifyContent="start" marginTop="50px">
                <Button
                    component={Link}
                    to="/admin/createsubscription"
                    variant="contained"
                    sx={{
                        backgroundColor: "#098D85",
                        '&:hover': {
                            backgroundColor: "#098D85",
                        }
                    }}
                >
                    Crear Suscripción 
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
                        rows={subscriptions ? subscriptions : []}
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

export default AdminSubscriptions;



