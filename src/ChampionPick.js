import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import champions from '../data/characters';

export default function ChampionPick(props) {
  
  const handleChange = event => {
    props.onChange(champions.find(champion => champion.name === event.target.value));
  };
  return (
        <TextField
          select
          fullWidth
          label={props.label || "wybierz championa"}
          value={props.champion?.name || ""}
          onChange={handleChange}
        >
          {champions.filter(champion => !props.omitChampions.includes(champion.name)).map((champion) => (
            <MenuItem key={champion.name} value={champion.name}>
              {champion.name}
            </MenuItem>
          ))}
        </TextField>
  );
}
