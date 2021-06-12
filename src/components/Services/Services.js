import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";

import Service from "../Service/Service";
const Services = () => {
  const [services, setServices] = useState([]);

  return (
    <Box pb={10}>
      <Container>
        <Box>
          <img src="" alt="" />
        </Box>
        <Typography variant="h4" gutterBottom align="center">
          Welcome to Nature
        </Typography>
        <Typography align="center" color='textSecondary' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Service key={service._id} {...service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
