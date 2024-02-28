import styles from "./SideBar.module.css"

import { useState } from "react";
import { Link } from "react-router-dom";

import ProfilePicture from "../../assets/blank-profile-picture-973460_960_720.webp"

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../scenes/admin-dashboard/theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.white[500],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Link className={styles.menuItem} to={to}>
                <Typography>{title}</Typography>
            </Link>
        </MenuItem>
    );
};


const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <Box>
            <Sidebar collapsed={isCollapsed}
                rootStyles={{
                    "& .ps-sidebar-container": {
                        backgroundColor: `${colors.purple[500]} !important`,
                        height: "100vh !important",
                    },
                    "& .ps-inner-item": {
                        padding: "5px 35px 5px 20px !important",
                    },
                    "& .ps-menu-button:hover": {
                        backgroundColor: `${colors.purple[600]} !important`,
                    },
                }}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.white[500],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h4" color={colors.white[500]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}
                                    style={{
                                        margin: "10px 0 20px 0",
                                        color: colors.white[500],
                                    }}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={currentUser?.photo || ProfilePicture}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.white[500]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Nombre
                                </Typography>
                                <Typography variant="h5" color={colors.green[500]}>
                                    Administrador
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Estadísticas"
                            to="/admin/analytics"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Usuarios"
                            to="/admin/users"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Curriculums"
                            to="/admin/curriculums"
                            icon={<DescriptionOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Categorías"
                            to="/admin/categories"
                            icon={<CategoryOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Idiomas"
                            to="/admin/languages"
                            icon={<TranslateOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Suscripciones"
                            to="/admin/subscriptions"
                            icon={<CardMembershipOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Comentarios"
                            to="/admin/comments"
                            icon={<CommentOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SideBar;