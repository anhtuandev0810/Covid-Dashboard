import { Grid } from '@material-ui/core';
import React from 'react';
import HighLightCard from './HighLightCard';


function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1]: [];
  const summary = [
    {
      title: 'Number of cases',
      count: data.Confirmed,
      type: 'confirmed'
    },

    {
      title: 'Number of cured cases',
      count: data.Recovered,
      type: 'recovered'
    },

    {
      title: 'Number of deaths',
      count: data.Deaths,
      type: 'deaths'
    }
  ];


  return (
    <Grid container spacing={3}>
        {
          summary.map((item, key) => 
            <Grid key={key} item sm={4} xs={12}>
              <HighLightCard title={item.title} count={item.count} type={item.type}/>
            </Grid>  
          )
        }
    </Grid>
  );
};

export default Highlight;