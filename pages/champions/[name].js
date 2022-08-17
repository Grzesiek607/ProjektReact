import React, {useState} from "react"
import { Container, Typography, Avatar, Stack, Divider, Grid } from '@mui/material';
import champions from "../../data/characters";
import runes from "../../data/runes";
import items from "../../data/items";
import characterStats from "../../data/characterStats";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import ChampionPick from "../../src/ChampionPick";
import ChampionSkillOrder from "../../src/ChampionSkillOrder";

import { useRouter } from 'next/router'


function RuneList(props) {
    return props.runes.map(key => {
        const rune = runes[key] || runes.default;
        return (
            <Avatar key={key} src={rune.img}>{rune.label.slice(0, 2)}</Avatar>

        )
    })
}

function ItemList(props) {
    return props.items.map(key => {
        const item = items[key] || items.default;
        return (
            <Avatar key={key} src={item.img}>{item.label.slice(0, 2)}</Avatar>

        )
    })
}


export default function ChampionDetails(props) {

    const router = useRouter();
    const { name } = router.query;

    const [comparedChampion, compareChampion] = useState(); 

    const champion = champions.find(champion => champion.name === name)

    if (!champion) return "Nie znaleziono championa"


    return (
        <Container>
            <Typography variant="h2">{name}</Typography>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6} lg={6}>
                    <Divider>RUNY</Divider>
                    <Stack direction="row" spacing={1}>
                        <Stack spacing={1}>
                            <RuneList runes={champion.runes.slice(0, 4)} />
                        </Stack>
                        <Stack spacing={1}>
                            <RuneList runes={champion.runes.slice(4)} />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>  
                    <Stack spacing={1}>
                    <Divider>STATY</Divider>
                        <RadarChart outerRadius={90} width={730} height={250} data={characterStats}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                            <Radar name={champion.name} dataKey={champion.name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            {comparedChampion && (
                                <Radar name={comparedChampion.name} dataKey={comparedChampion.name} stroke="#888888" fill="#888888" fillOpacity={0.6} />
                            )}
                            <Legend />
                        </RadarChart>
                    </Stack>
                    <ChampionPick champion={comparedChampion} omitChampions={[champion.name]} onChange={compareChampion} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Stack direction="column" spacing={1}>
                        <Divider>PRZEDMIOTY</Divider>
                        <p>ITEMY STARTOWE</p>
                        <Stack direction="row" spacing={1}>
                            <ItemList items={champion.items.slice(0, 2)} />
                        </Stack>
                        <p>CORE ITEMY</p>
                        <Stack direction="row" spacing={1}>
                            <ItemList items={champion.items.slice(2, 5)} />
                        </Stack>
                        <p>FULL BUILD</p>
                        <Stack direction="row" spacing={1}>
                            <ItemList items={champion.items.slice(2)} />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                    <Stack spacing={3}>
                        <Divider>SKILL ORDER</Divider>
                        {champion.skills ? <ChampionSkillOrder champion={champion} /> : "Nie udalo sie pobrac skilli"}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}