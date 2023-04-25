import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.png";
import React from "./images/react.jpg";
import CSHARP from "./images/Csharp1.png";
import Java from "./images/java.jpg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
  return (
    <div className="App">
      <header className="App-header">
        <div id="container">   <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Courses
              </Typography>
            </Toolbar>
          </AppBar>

          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Item>
                <Course Image={React} Title="React" Description={lorem} />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Course Image={Angular} Title="Angular" Description={lorem} />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Course Image={CSHARP} Title="C#" Description={lorem} />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Course Image={Java} Title="Java" Description={lorem} />
              </Item>
            </Grid>
          </Grid>
        </Box></div>
     
      </header>
    </div>
  );
}

export default App;
