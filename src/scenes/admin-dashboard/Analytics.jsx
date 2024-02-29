import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DescriptionIcon from '@mui/icons-material/Description';
import PaidIcon from '@mui/icons-material/Paid';

import LineChart from "../../components/admin-dashboard/LineChart";
import GeographyChart from "../../components/admin-dashboard/GeographyChart";
import BarChart from "../../components/admin-dashboard/BarChart";
import StatBox from "../../components/admin-dashboard/StatBox";
import ProgressCircle from "../../components/admin-dashboard/ProgressCircle";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import getAllUsersUnfiltered from "../../redux/actions/users/getAllUsersUnfiltered";
import getAllCvsUnfiltered from "../../redux/actions/cvs/getAllCvsUnfiltered";


const Analytics = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mockTransactions = null;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.allUsersUnfiltered);
  const cvs = useSelector((state) => state.cvs.allCvsUnfiltered);

  useEffect(() => {
    dispatch(getAllUsersUnfiltered());
    dispatch(getAllCvsUnfiltered());
}, [dispatch]);

console.log(users);

const usersWithSubscription = users?.filter((user) => user.Subscription && user.Subscription.price !== 0)
const subscriptionIncome =  usersWithSubscription?.length * 2000

const numberOfUsersWithSubscription = usersWithSubscription?.length;

const percentageOfSubscribedUsers = (numberOfUsersWithSubscription / users?.length) 
const roundedSubsribersPercentage = parseFloat(percentageOfSubscribedUsers.toFixed(2));
const subscribersPercentage = parseFloat((roundedSubsribersPercentage * 100).toFixed(2)); 

const usersWithCvs = users?.filter((user) => user.Cvs && user.Cvs.length > 0)
const numberOfUsersWithCvs = usersWithCvs?.length;
const percentageOfUsersWithCvs = (numberOfUsersWithCvs / users?.length) 
const roundedUsersPercentage = parseFloat(percentageOfUsersWithCvs.toFixed(2));
const usersPercentage = parseFloat((roundedUsersPercentage * 100).toFixed(2));
    
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">

        <Box>
          <Button
            sx={{
              backgroundColor: colors.purple[500],
              color: colors.white[500],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginBottom: "20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          borderColor={colors.black[500]}
          backgroundColor={colors.white[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            border: `1px solid ${colors.black[100]}`, // Add a border here
            borderRadius: '10px', // Optional: Add a border radius if desired
        }}
        >
          <StatBox
            title={cvs?.length}
            subtitle="CV Cargados"
            progress="0.75"
            increase="+14%"
            icon={
              <DescriptionIcon
                sx={{ color: colors.green[500], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.white[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            border: `1px solid ${colors.black[100]}`, // Add a border here
            borderRadius: '10px', // Optional: Add a border radius if desired
        }}
        >
          <StatBox
            title={usersWithSubscription?.length}
            subtitle="Suscripciones"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.green[500], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.white[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            border: `1px solid ${colors.black[100]}`, // Add a border here
            borderRadius: '10px', // Optional: Add a border radius if desired
        }}
        >
          <StatBox
            title={users?.length}
            subtitle="Nuevos usuarios"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.green[500], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.white[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            border: `1px solid ${colors.black[100]}`, // Add a border here
            borderRadius: '10px', // Optional: Add a border radius if desired
        }}
        >
          <StatBox
            title={`$${subscriptionIncome}`}
            subtitle="Ingresos totales"
            progress="0.80"
            increase="+43%"
            icon={
              <PaidIcon
                sx={{ color: colors.green[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.white[500]}
          sx={{
            border: `1px solid ${colors.black[100]}`, // Add a border here
            borderRadius: '10px', // Optional: Add a border radius if desired
        }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.black[500]}
              >
                Ingresos generados
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.green[500]}
              >
               {`$${subscriptionIncome}`}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.green[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.white[500]}
          overflow="auto"
          sx={{
            border: `1px solid ${colors.black[100]}`, // Add a border here
            borderRadius: '10px', // Optional: Add a border radius if desired
        }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.black[500]}`}
            colors={colors.black[500]}
            p="15px"
          >
            <Typography color={colors.black[500]} variant="h5" fontWeight="600">
              Transacciones recientes
            </Typography>
          </Box>
          {mockTransactions?.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.black[100]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.green[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.black[500]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.black[500]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.green[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.white[500]}
          p="30px"
          sx={{
            border: `1px solid ${colors.black[100]}`, // Add a border here
            borderRadius: '10px', // Optional: Add a border radius if desired
        }}
        >
          <Typography variant="h5" fontWeight="600">
            Usuarios subscriptos
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle progress={roundedSubsribersPercentage} size="125" />
            <Typography
              variant="h5"
              color={colors.green[500]}
              sx={{ mt: "15px" }}
            >
              {`${subscribersPercentage}% de usuarios subscriptos`}
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.white[500]}
          p="30px"
          sx={{
            border: `1px solid ${colors.black[100]}`, // Add a border here
            borderRadius: '10px', // Optional: Add a border radius if desired
        }}
        >
          <Typography variant="h5" fontWeight="600">
            Usuarios con CV's 
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle progress={roundedUsersPercentage} size="125" />
            <Typography
              variant="h5"
              color={colors.green[500]}
              sx={{ mt: "15px" }}
            >
              {`${usersPercentage}% de usuarios cargaron CV's`}
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.white[500]}
          padding="30px"
          sx={{
            border: `1px solid ${colors.black[100]}`, // Add a border here
            borderRadius: '10px', // Optional: Add a border radius if desired
        }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Residencia de los usuarios
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Analytics;