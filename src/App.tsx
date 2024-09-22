import { Box, Typography } from "@mui/material";
import "./App.css";

function App() {
  const data = [
    {
      name: "Round 1",
      matches: [
        {
          playerone: "John Smith",
          playertwo: "James Brown",
          score1: 1,
          score2: 3,
        },
        {
          playerone: "Emily Davis",
          playertwo: "Sophia Johnson",
          score1: 4,
          score2: 2,
        },
        {
          playerone: "Michael Lee",
          playertwo: "David Kim",
          score1: 3,
          score2: 5,
        },
        {
          playerone: "Anna Wilson",
          playertwo: "Grace Martinez",
          score1: 6,
          score2: 7,
        },
        {
          playerone: "Chris Evans",
          playertwo: "Ryan Moore",
          score1: 3,
          score2: 0,
        },
        {
          playerone: "Daniel Clark",
          playertwo: "Matthew Hall",
          score1: 5,
          score2: 6,
        },
        {
          playerone: "Olivia Lewis",
          playertwo: "Liam Walker",
          score1: 1,
          score2: 4,
        },
        {
          playerone: "Zoe Harris",
          playertwo: "Ethan Young",
          score1: 3,
          score2: 3,
        },
      ],
    },
    {
      name: "Round 2",
      matches: [
        {
          playerone: "James Brown",
          playertwo: "Emily Davis",
          score1: 2,
          score2: 4,
        },
        {
          playerone: "David Kim",
          playertwo: "Anna Wilson",
          score1: 1,
          score2: 5,
        },
        {
          playerone: "Chris Evans",
          playertwo: "Matthew Hall",
          score1: 3,
          score2: 1,
        },
        {
          playerone: "Liam Walker",
          playertwo: "Zoe Harris",
          score1: 4,
          score2: 4,
        },
      ],
    },
    {
      name: "Semi-Final",
      matches: [
        {
          playerone: "Emily Davis",
          playertwo: "Anna Wilson",
          score1: 3,
          score2: 6,
        },
        {
          playerone: "Chris Evans",
          playertwo: "Liam Walker",
          score1: 5,
          score2: 4,
        },
      ],
    },
    {
      name: "Final",
      matches: [
        {
          playerone: "Anna Wilson",
          playertwo: "Chris Evans",
          score1: 2,
          score2: 3,
        },
      ],
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 1,
        }}
      >
        {data.map((x) => (
          <Typography width={310}>{x.name}</Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {data.map((x) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  justifyContent: "space-around",
                }}
              >
                {x.matches.map((y, i) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      verticalAlign: "middle",
                      margin: "10px 0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        border: "2px solid green",
                        justifyContent: "center",
                        width: "250px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          border: "2px solid green",
                          gap: 5,
                          padding: 2,
                        }}
                      >
                        <Box>{y.playerone}</Box>
                        <Box>{y.score1}</Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          gap: 5,
                          padding: 2,
                        }}
                      >
                        <Box>{y.playertwo}</Box>
                        <Box>{y.score2}</Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {Array.from({ length: x.matches.length / 2 }).map(() => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      height: "50%",
                    }}
                  >
                    <Box
                      sx={{
                        height: `${
                          (100 / x.matches.length) * 2 < 50
                            ? 50
                            : (100 / x.matches.length) * 2
                        }%`,
                        border: "3px solid red",
                        borderLeft: " none",
                        width: "20px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        height: "0px",
                        border: "1px solid red",
                        borderLeft: " none",
                        width: "40px",
                      }}
                    ></Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
