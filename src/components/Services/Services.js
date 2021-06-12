import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import logo from '../../asset/service-logo.png'
import service1 from '../../asset/service-1.png'
import service2 from '../../asset/service-2.png'

const Services = () => {
  const services = [service1, service2, service1, service1]

  return (
    <Box pb={10}>
      <Container>
        <Box align='center' mb={1}>
          <img src={logo} alt="logo" />
        </Box>
        <Typography variant="h4" gutterBottom align="center">
          Welcome to Nature
        </Typography>
        <Typography align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Box mt={8}>
          <Grid container spacing={4}>
            {services.map((service, id) => (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                <Box>
                  <img style={{ display: 'block', margin: 'auto' }} src={service} alt="" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
