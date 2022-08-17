import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = ["Q", "W", "E", "R"];

export default function ChampionSkillOrder(props) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
            {rows.map(skill =>(
                <TableRow key={skill}>
                    <TableCell>{skill}</TableCell>
                    {props.champion.skills.map((championSkill, index) => (
                        <TableCell>
                            {championSkill === skill  ? index+1 : " "}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
