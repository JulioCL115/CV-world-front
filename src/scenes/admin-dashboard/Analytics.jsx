import { Box, Typography } from "@mui/material";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

function AdminAnalytics() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Typography
                variant="h1"
                color={colors.black[500]}
                fontWeight="600"
                marginTop="45px"
            >
                Estadísticas
            </Typography>
        </Box>

    );
};

export default AdminAnalytics;