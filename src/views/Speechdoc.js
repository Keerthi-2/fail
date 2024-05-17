import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import 'views/speechdoc.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
 
 
export default function Speechdoc() {
 
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
 
    const YoutubeEmbed1 = ({ embedId1 }) => (
        <div className="video-responsive">
            <iframe
                width="400"
                height="200"
                src={`https://www.youtube.com/embed/${embedId1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div >
    );
 
 
    const YoutubeEmbed2 = ({ embedId2 }) => (
        <div className="video-responsive">
            <iframe
                width="400"
                height="200"
                src={`https://www.youtube.com/embed/${embedId2}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div >
    );
 
    const YoutubeEmbed3 = ({ embedId3 }) => (
        <div className="video-responsive">
            <iframe
                width="400"
                height="200"
                src={`https://www.youtube.com/embed/${embedId3}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div >
    );
 
    const YoutubeEmbed4 = ({ embedId4 }) => (
        <div className="video-responsive">
            <iframe
                width="400"
                height="200"
                src={`https://www.youtube.com/embed/${embedId4}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div >
    );
 
    YoutubeEmbed1.propTypes = {
        embedId1: PropTypes.string.isRequired
    };
 
    YoutubeEmbed2.propTypes = {
        embedId2: PropTypes.string.isRequired
    };
 
    YoutubeEmbed3.propTypes = {
        embedId2: PropTypes.string.isRequired
    };
 
    YoutubeEmbed4.propTypes = {
        embedId2: PropTypes.string.isRequired
    };
 
    return (
        <div>
            <h1 style={{ marginLeft: '20px', marginTop: '20px', }}>Courses recommended</h1>
 
 
            <Box sx={{ width: '100%', height: '100%' }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
                    <Grid item xs={6}>
                        <Item><a href='https://www.shortform.com/summary/communication-skills-training-summary-james-williams?utm_source=bing&utm_medium=cpc&utm_campaign=530909223&msclkid=15988c8e4fce1c1dbb1eeac8151f84dd'>Course1</a></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><a href='https://www.bing.com/search?q=how+to+improve+the+communication+skills&qs=SC&pq=how+to+improve+the+commuction&sc=10-29&cvid=4FE8BBE188194B5A8C1E5E4313586A30&FORM=QBRE&sp=1&lq=0'>Course2</a></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><YoutubeEmbed1 embedId1="Fjlsrgye0Cs" /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><YoutubeEmbed2 embedId2="mPRUNGGORDo" /></Item>
                    </Grid>
 
                    <Grid item xs={6}>
                        <Item><a href='https://www.shortform.com/summary/communication-skills-training-summary-james-williams?utm_source=bing&utm_medium=cpc&utm_campaign=530909223&msclkid=15988c8e4fce1c1dbb1eeac8151f84dd'>Course3</a></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><a href='https://www.bing.com/search?q=how+to+improve+the+communication+skills&qs=SC&pq=how+to+improve+the+commuction&sc=10-29&cvid=4FE8BBE188194B5A8C1E5E4313586A30&FORM=QBRE&sp=1&lq=0'>Course4</a></Item>
                    </Grid>
 
                    <Grid item xs={6}>
                        <Item><YoutubeEmbed1 embedId1="pJ7RgUCEd5M" /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><YoutubeEmbed2 embedId2="1rzVgpueipU" /></Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}