import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";

export const CardComponent = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Paper 
      style={{ 
        width: '450px', 
        height: '450px', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          filter: hovered ? 'brightness(0.7)' : 'brightness(1)', // Darken on hover
          transition: 'filter 0.3s ease' // Smooth transition for brightness
        }} 
        src="./public/photo_2024-11-25_21-31-31.jpg" 
        alt="Card" 
      />
      <Box 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: hovered ? 'rgba(128, 128, 128, 0.5)' : 'transparent', // Gray overlay on hover
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          transition: 'background-color 0.3s ease', // Smooth transition for overlay
          zIndex: 1 
        }}
      >
        <Typography 
          variant="h6" 
          style={{ 
            color: 'white', 
            opacity: hovered ? 1 : 0, // Show text on hover
            transition: 'opacity 0.3s ease' // Smooth transition for text
          }}
        >
          pirates share the loot
        </Typography>
      </Box>
      <Box 
        style={{ 
          position: 'absolute', 
          bottom: '10px', 
          left: '10px', 
          color: 'white', 
          opacity: hovered ? 1 : 0, // Show author info on hover
          transition: 'opacity 0.3s ease', // Smooth transition for author info
          zIndex: 1 
        }}
      >
        <Typography variant="body2">Author: John Doe</Typography>
        <Typography variant="body2">Generated by: NeuralNet AI</Typography>
      </Box>
    </Paper>
  );
};