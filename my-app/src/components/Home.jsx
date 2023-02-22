import {
    Box,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
  import Grid from "@mui/material/Unstable_Grid2";
  import { tokens, useMode } from "/Applications/GitHub/DAO2/my-app/src/DashTheme.js";
  import { mockTransactions } from "/Applications/GitHub/DAO2/my-app/src/data/mockData.js";
  import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
  import EmailIcon from "@mui/icons-material/Email";
  import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
  import PersonAddIcon from "@mui/icons-material/PersonAdd";
  import TrafficIcon from "@mui/icons-material/Traffic";
  import LineChart from "/Applications/GitHub/DAO2/my-app/src/components/reports/LineChart.jsx";
  import GeographyChart from "/Applications/GitHub/DAO2/my-app/src/components/reports/GeographyChart.jsx";
  import BarChart from "/Applications/GitHub/DAO2/my-app/src/components/reports/BarChart.jsx";
  import StatBox from "/Applications/GitHub/DAO2/my-app/src/components/reports/StatBox.jsx";
  import ProgressCircle from "/Applications/GitHub/DAO2/my-app/src/components/reports/ProgressCircle.jsx";
  import Header from "/Applications/GitHub/DAO2/my-app/src/components/reports/Header.jsx";
  import { dark } from "@mui/material/styles/createPalette";

  
  
  
  const Home = () => {
    const theme = useTheme() ;
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const colors = tokens(theme.palette.mode);

    return (

      <Box m="20px">
        {/* HEADER */}
  
        <Box
          display={smScreen ? "flex" : "block"}
          flexDirection={smScreen ? "row" : "column"}
          justifyContent={smScreen ? "space-between" : "start"}
          alignItems={smScreen ? "center" : "start"}
          m="10px 0"
        >
          <Header title="DAO Metrics" subtitle="Welcome to your dashboard"/>
  
          <Box>
            
          </Box>
        </Box>
  
        {/* GRID & CHARTS */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor= "#1a1e27"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="12,361"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor= "#1a1e27"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="431,225"
                subtitle="Sales Obtained"
                progress="0.50"
                increase="+21%"
                icon={
                  <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor= "#1a1e27"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="32,441"
                subtitle="New Clients"
                progress="0.30"
                increase="+5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor= "#1a1e27"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="1,325,134"
                subtitle="Traffic Received"
                progress="0.80"
                increase="+43%"
                icon={
                  <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
  
          <Grid
            xs={12}
            sm={12}
            md={8}
            lg={8}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={12}>
              <Box backgroundColor="#1a1e27">
                <Box
                  mt="25px"
                  p="0 30px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.grey[100]}
                    >
                      Revenue Generated
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.greenAccent[500]}
                    >
                      $58,373,698
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton>
                      <DownloadOutlinedIcon
                        sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                <Box height="250px" m="-20px 0 0 0">
                  <LineChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              <Box backgroundColor= "#1a1e27" p="30px">
                <Typography variant="h5" fontWeight="600">
                  Campaign
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mt="25px"
                >
                  <ProgressCircle size="125" />
                  <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                    sx={{ mt: "15px" }}
                  >
                    $48,352 revenue generated
                  </Typography>
                  <Typography>
                    Includes extra misc expenditures and costs
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              <Box backgroundColor= "#1a1e27">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "30px 30px 0 30px" }}
                >
                  Sales Quantity
                </Typography>
                <Box height="250px" mt="-20px">
                  <BarChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Box backgroundColor= "#1a1e27" padding="30px">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ marginBottom: "15px" }}
                >
                  Geography Based Traffic
                </Typography>
                <Box height="200px">
                  <GeographyChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box
              backgroundColor="#1a1e27"
              maxHeight="100vh"
              overflow="auto"
              m="25px 0 0 0"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                color={colors.grey[100]}
                p="15px"
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Resent Transaction
                </Typography>
              </Box>
              {mockTransactions.map((transaction, i) => {
                return (
                  <Box
                    key={`${transaction}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="600"
                        color={colors.greenAccent[100]}
                      >
                        {transaction.txId}
                      </Typography>
                      <Typography color={colors.grey[100]}>
                        {transaction.user}
                      </Typography>
                    </Box>
                    <Box color={colors.grey[100]}>{transaction.date}</Box>
                    <Box
                      color={colors.greenAccent[500]}
                      p="5px 10px"
                      borderRadius="4px"
                    >
                      ${transaction.cost}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
      
    
    );
  };
  
  export default Home;
  