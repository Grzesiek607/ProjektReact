import React from "react"
import {Grid, Card, CardMedia, CardHeader, CardActionArea } from "@mui/material";
import Link from 'next/link'
export default function ChampionList(props){
    return (
    <Grid container spacing={2} columns={{ xs: 12, md: 16, lg: 20 }}>
        {props.champions.map((champion) => (
           <Grid item xs={6} md={4} lg={4} key={champion.name}>
               <Card component={Link} href={`champions/${champion.name}`}>
                   <CardActionArea>
                       <CardHeader title={champion.name}/>
                       <CardMedia
                           component="img"
                           image={champion.img}
                       />
                   </CardActionArea>
               </Card>
           </Grid>
       ))}
   </Grid>
   )

}
