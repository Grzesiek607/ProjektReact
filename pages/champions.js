import React from "react"
import { Container, Grid, Card, CardContent,TextField } from "@mui/material";
import champions from "../data/characters";
import ChampionList from "../src/ChampionList";




export default function Champions(props){
    const [name, setName] = React.useState('');
    const [filtredChamps, filterChampions] = React.useState(champions);

    React.useEffect(() => {
        filterChampions(
            champions.filter(
                // champion => champion.name.toLowerCase().includes(name.toLowerCase())
                function(champion){ return champion.name.toLowerCase().includes(name.toLowerCase()) } // the same as previous
            )
        )
    }, [name])
    
    const handleChange = event => setName(event.target.value);
    
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={9} >
                  <ChampionList  champions={filtredChamps}/>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Card sx={{ mt: 2 }}>
                        <CardContent>
                            <TextField fullWidth label="Search for champ" variant="outlined" value={name} onChange={handleChange}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
