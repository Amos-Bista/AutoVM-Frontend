import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const Portalcard = () => {
  // State to hold the total number of clients
  const [totalClients, setTotalClients] = useState(0);
  const [totalPackages, setTotalpackages] = useState(0);

  const clinetdata = [10, 20, 30, 10, 25, 12, 1, 10, 20];
  const calculateTotalClients = () => {
    const total = clinetdata.reduce((acc, curr) => acc + curr, 0);
    setTotalClients(total);
  };

  const packagedata = [1, 2, 3, 0, 5, 2, 1, 0, 2];
  const calculateTotalpackage = () => {
    const total = packagedata.reduce((acc, curr) => acc + curr, 0);
    setTotalpackages(total);
  };
  useEffect(() => {
    calculateTotalpackage();
    calculateTotalClients();
  }, [packagedata, clinetdata]);

  return (
    <Box
      sx={{
        marginTop: "2rem",
        paddingLeft: "4rem",
        paddingX: "2rem",
        width: "100%",
        color: "#B4B9BF",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sx={{
            backgroundColor: "#14191F",
            height: "4rem",
            borderRadius: "1rem",
            marginRight: "1rem",
            display: "flex",
            justifyContent: "space-between",
            paddingX: "1rem",
            color: "white",
          }}
        >
          <span>Total Number of Clients</span>
          <span>{totalClients}</span>{" "}
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            backgroundColor: "#14191F",
            height: "4rem",
            borderRadius: "1rem",
            marginLeft: "20rem",
            display: "flex",
            justifyContent: "space-between",
            paddingX: "1rem",
            color: "white",
          }}
        >
          <span>Total Number of Packages</span>
          <span>{totalPackages}</span>
        </Grid>
        <Grid
          item
          xs={5.9}
          sx={{
            marginTop: "1rem",
            backgroundColor: "white",
            height: "20rem",
            borderRadius: "1rem",
            magrinLeft: "auto",
            padding: "0px",
          }}
        >
          <span>Graph of Clinets</span>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9] }]}
            series={[
              {
                data: clinetdata,
              },
            ]}
            width={500}
            height={280}
            sx={{ margin: "0" }}
          />
        </Grid>
        <Grid
          item
          xs={5.9}
          sx={{
            marginTop: "1rem",
            marginLeft: "1rem",
            backgroundColor: "white",
            height: "20rem",
            borderRadius: "1rem",
          }}
        >
          <span>Graph of Packages</span>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9] }]}
            series={[
              {
                data: packagedata,
              },
            ]}
            width={500}
            height={280}
            sx={{ margin: "0" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portalcard;
