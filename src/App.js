import { useEffect, useState } from 'react';
import CountrySelector from './components/CountrySelector/index';
import Highlight from './components/Highlight/index';
import Summary from './components/Summary/index';
import { getCountries, getReportByCountry } from './apis';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then(res => {
      setCountries(res.data);
      setSelectedCountryId('vn');
    });
  }, []);

  useEffect(() => {
    if(selectedCountryId) {
      const { Slug } = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId);
      getReportByCountry(Slug).then(res => {
        res.data.pop(); //delete last item
        setReport(res.data);
      });
    };
  }, [countries, selectedCountryId]);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
    // getReportByCountry()
  };
  
  return (
    <Container style={{marginTop: 20}}>
      <Typography variant="h2" component="h2">
        COVID-19 Figures
      </Typography>
      <Typography>{moment().format('LLL')}</Typography>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId}/>
      <Highlight report={report}/>
      <Summary report={report}/>
    </Container>
  );
}

export default App;
