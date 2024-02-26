import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllCommentsUnfiltered from "../../redux/actions/comments/getAllCommentsUnfiltered";
import deleteComment from "../../redux/actions/comments/deleteComment";
import updateComment from "../../redux/actions/comments/updateComment";
import restoreComment from "../../redux/actions/comments/restoreComment";

import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';

function AdminComments () {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.allCommentsUnfiltered);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        dispatch(getAllCommentsUnfiltered());
    }, [dispatch]);

    console.log(comments);

    const onDelete = async (e, params) => {
        await deleteComment(params.id);
        dispatch(getAllCommentsUnfiltered());
    };

    const onRestore = async (e, params) => {
        await restoreComment(params.id);
        dispatch(getAllCommentsUnfiltered());
    };


    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 100,
        },
        {
            field: "comment",
            headerName: "Comentario",
            width: 200,
            cellClassName: "name-column--cell",
        },
        {
            field: "createdAt",
            headerName: "Fecha de creación",
            width: 250,
        },
        {
            field: "deleted",
            headerName: "Deshabilitado",
            width: 150,
        },
        {
            field: "CvId",
            headerName: "ID CV",
            width: 150,
        },
        {
            field: "UserId",
            headerName: "ID Usuario",
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
                Comentarios
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
                        rows={comments ? comments : []}
                        columns={columns}
                        slots={{ Toolbar: GridToolbar }}
                        checkboxSelection
                    />
                </div>
            </Box>
        </Box>
    );
};

export default AdminComments;
