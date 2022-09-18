import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import HighMaps from '../Charts/HighMaps';
import LineChart from '../Charts/LineChart';
import { getMapDataByCountryId } from '../../apis';

export default function Summary({ countryId, report }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (countryId) {
      getMapDataByCountryId(countryId)
        .then((res) => {
          setMapData(res);
        })
        .catch((err) => console.log({ err }));
    }
  }, [countryId]);
  // console.log(mapData);
  return (
    <div style={{ height: '500px', marginTop: 10 }}>
      <Grid container spacing={3}>
        <Grid item sm={12} xs={12}>
          <LineChart data={report} />
        </Grid>
        {/* <Grid item sm={4} xs={12}>
          <HighMaps mapData={mapData} />
        </Grid> */}
      </Grid>
    </div>
  );
}