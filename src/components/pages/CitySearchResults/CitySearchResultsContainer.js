import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCityData, pinCity, fetchSavedCity } from '../../../state/actions';
import RenderCitySearchResults from './RenderCitySearchResults';
import { Spin, notification } from 'antd';
import { Header, Footer } from '../../common/';

const spinStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: '46%',
  width: '100%',
  margin: 'auto',
};

const fakeJobsData = {
  'Search Results': '166 jobs',
  'Top 10 Listings': [
    {
      'Job Title': 'Artificial Intelligence/Machine Learning Data Scientist',
      Company: 'Mitre Corporation',
      Location: 'United States',
      'Date Posted': '30+ days ago',
      'Extract Date': '2021-04-09',
      Description:
        'Conduct quantitative data analysis using a variety of datasets, including developing retrieval, processing, fusion, analysis, and visualization of various…',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0BBUPciN9wcSxN_uSlvW8DKiROReedfXIipczBiwvJUsobg1cYzYLrR9Z-OBOyqTUqyT1gjdleZIeNZYJyAa3KpawkKrH61q720wCkzWoRZFdyT3cZi89pVF3f625GWY-FdLXhLCSwa9nm0SZ6YAI99Q2BkfeqiBJf4hrQFo9RecsTdyNgmYcb_707dUszHBQXqvnu9o90sjvpuLDAE_dNiz0dhIOxSrz6dZBbKomtb_BFSpChajaaAS7yECFEoXqaELj3wi5fu1zdI0He1GcooDBAzzmCSia6AjE4M5hf8gC1OmPP26sZ1nT9zH0TisLM57MRmuKNMOiqcTexHCwHcg0tnTCDQPLAuHplmJ0JMbJFM3FOpBBgDWK9tgBvDFNhBRJ-5gFsE23Q2I7GzbuMtA9GRyiweX44HjS7NZX9dA2I7eriOpLd0YB1JOhv3RODE5fO_DMw3ESmCWxJCdQCYDi2KUdnLgqGNtmA9demjvE6t-1vcDtnI92Z92WbLiWZcPESVG_-VLGx3VfYbOVTxXJLzI1Fn6GKlU6TG-oHtEQ==&p=0&fvj=0&vjs=3',
    },
    {
      'Job Title': 'Data Scientist',
      Company: 'CyberCoders',
      Location: 'Baltimore, MD',
      'Date Posted': '1 day ago',
      'Extract Date': '2021-04-09',
      Description:
        'Collaborate with analytics teams to create insights from data to be presented to clients.\nTranslate data analysis to guide business decisions.',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0CpFJQzrgRR8WqXWK1qKKEqALWJw739KlKqr2H-MSI4eh4ZOxqVaUrhNSyjVEAq5t61BseoOTC-wTXz3hCmIhiLvL84kk3B-LnKNaQIM9PUtH6pxwkpX8rdi-2YvYaSg_MWeKQY1CiICJIqFUnFz2a55EjsmIoo1QMi0ttHOhC6hV2hRzUc8XmcVXE1k9G1xGC2UY3rCTqUP7sCncVt3FGWXTLykYJ5Saqo9Lm23owAC02BZtdnUUSgZFmSwCvqG57GGKO3-DbIJnsI3mu7ZEV1xmDuqAeqDSNYx2NzaDml7D8LkYUgAi9xTdfJsbdeTNLjWBOTDR_51EymlDV4QeDxG3p05ySrJ3fKu3jxvMd8D6_PL-lhhgA2Izmxto7L69VvPIZxLaxMuezogatY5BDbG2RLg1C0UgmNrPoiSzwJ37IpZ7cHBknMm0ozpPOWJXE2LC9dpcG7Es4oTFPW18j2Ed3oGBrdMQ1OM75YZIn5_wSk3S2ft1FBMN52a2h3oiNOBcwrJ1BSwBG5_JyvvltQSQqv1krYMpkyhzEgXYsl6e-i1psPxEUWrnYY8GroUtf0yfGa7bWd-zep17BxQXQf3mol3g2YwxEuTPge3hMzfqfVU20a4p5-PjiQ2zyDpIpm4drvgy0jcULx9GeZZYazFtxIZXAjU6NNUlPpWldGeKd96-AxW8lj_XmL1i6rkr-K02XmhchOwKjpHBxp5bmIspgSBiBYxaV1y96LmshYgxnEwsj4x3e8tf4eBP9n1llgqXOcoyOylfVSdTp_bxaKe5NLNOv3JOCoZN1r0jvQTjx_U7LD-FctjoJnLVerYa-xmcCiXvyav1K43XmOQW1NOTM_pECW5pkV7vSZc7Oof3-SWnQy_L44dsGaQddOe6gjhtPEKlDBvsGjO3xgiSED8XF5PDJdX-QfBw6KoRm_tZpUgDgI8IcTv8g7wHElEShmSdg18xEQrw==&p=1&fvj=0&vjs=3',
    },
    {
      'Job Title': 'Data Scientist',
      Company: 'CyberData Technologies',
      Location: 'Baltimore, MD',
      'Date Posted': '9 days ago',
      'Extract Date': '2021-04-09',
      Description:
        'Responsible for identifying and mining data elements within the existing client data systems for use in detecting and preventing fraud.',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=992157ddb0456a7b&fccid=a3c5b33602d6c0de&vjs=3',
    },
    {
      'Job Title': 'Coupled Data Assimilation Scientist',
      Company: 'US National Aeronautics and Space Administration',
      Location: 'Greenbelt, MD',
      'Date Posted': 'Today',
      'Extract Date': '2021-04-09',
      Description:
        "Interact regularly with collaborating scientists and developers to maximize cooperation and ensure compatibility with the organization's scientific objectives.",
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=6d5a739c358ea0a1&fccid=8c030cba757a9cb0&vjs=3',
    },
    {
      'Job Title': 'CLAIMS ANALYST (DATA MINING)',
      Company: 'Trend Health Partners',
      Location: 'Hunt Valley, MD',
      'Date Posted': '21 days ago',
      'Extract Date': '2021-04-09',
      Description:
        'Interpret and analyze data to accurately assess and demonstrate key insights into trends and opportunities.\nWe offer a comprehensive compensation package which…',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=28bdd7e860cda73d&fccid=52e4067a4f6702e9&vjs=3',
    },
    {
      'Job Title': 'Data Scientist',
      Company: 'Thermo Fisher Scientific',
      Location: 'Baltimore, MD',
      'Date Posted': '13 days ago',
      'Extract Date': '2021-04-09',
      Description:
        "Bachelor's Degree plus 3+ years of relevant experience in data science, analytics, statistics, applied math or related field OR Master's Degree plus 2+ years of…",
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=e09b0d60f4c7201c&fccid=126e3afd205caa95&vjs=3',
    },
    {
      'Job Title': 'Data Scientist, Junior',
      Company: 'FEDDATA',
      Location: 'Columbia, MD',
      'Date Posted': '28 days ago',
      'Extract Date': '2021-04-09',
      Description:
        'Ability to visualize data in the most effective way possible for a given project or study.\nExperience with machine learning and AI.',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=f3508514e9c4bb29&fccid=48c5a9dbe6dfea18&vjs=3',
    },
    {
      'Job Title': 'Data Scientist',
      Company: 'Beacon Street Services',
      Location: 'Baltimore, MD',
      'Date Posted': '30+ days ago',
      'Extract Date': '2021-04-09',
      Description:
        'Examples include, visualization tasks, BI meta data model development, data loading, data cleansing, etc.\nThis position is not ideal for a data scientist who…',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=8259e2cda29e0423&fccid=582fbfedf7e354b4&vjs=3',
    },
    {
      'Job Title': 'Data Scientist/Developer - Full Time',
      Company: 'Anne Arundel Medical Center',
      Location: 'Annapolis, MD',
      'Date Posted': '8 days ago',
      'Extract Date': '2021-04-09',
      Description:
        'Establishes data mining architectures, modeling standards, reporting and data analysis methodologies.\nCommunicates effectively with users, vendors, and AAMC…',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=b829252c1306c809&fccid=e59e92e9b6fcfcb2&vjs=3',
    },
    {
      'Job Title': 'Data Scientist, AWS Security- Baltimore',
      Company: 'Amazon Dev Center U.S., Inc.',
      Location: 'Baltimore, MD',
      'Date Posted': '1 day ago',
      'Extract Date': '2021-04-09',
      Description:
        'Hands-on professional experience with applying machine learning and other data science techniques to identify anomalous behavior patterns (e.g., user or machine…',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=71f89d41ae69a130&fccid=fe2d21eef233e94a&vjs=3',
    },
    {
      'Job Title': 'Data Scientist',
      Company: 'Tradeswell',
      Location: 'Baltimore, MD',
      'Date Posted': '30+ days ago',
      'Extract Date': '2021-04-09',
      Description:
        'Develop a deep understanding of the data generation process and pipeline.\nYou will be expected to have an aptitude for data wrangling which requires an…',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=d9879fb6f0d0cd35&fccid=d36b5fa012172fa1&vjs=3',
    },
    {
      'Job Title': 'Data Scientist Level II - Annapolis Junction, MD',
      Company: 'Sentar',
      Location: 'Fort George G Meade, MD',
      'Date Posted': '4 days ago',
      'Extract Date': '2021-04-09',
      Description:
        'Requires experience with the implementation of data science techniques, scripting, statistical analysis, and machine learning to support rapid prototyping and…',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=0289b822ff26dc3b&fccid=d599763308588603&vjs=3',
    },
    {
      'Job Title': 'Data Scientist',
      Company: 'Varen Technologies',
      Location: 'Annapolis Junction, MD',
      'Date Posted': '2 days ago',
      'Extract Date': '2021-04-09',
      Description:
        'A data scientist will develop machine learning, data mining, statistical and graph-based algorithms to analyze and make sense of data sets; prototype or…',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=3901a405d857e87b&fccid=898cb537778fecc3&vjs=3',
    },
    {
      'Job Title': 'Data Scientist 1',
      Company: 'PayPal',
      Location: 'Timonium, MD',
      'Date Posted': '30+ days ago',
      'Extract Date': '2021-04-09',
      Description:
        'Provide analytical insights by analyzing various types of data, including mining our customer data, review of relevant cases/samples, and incorporation of…',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/rc/clk?jk=389daeceaf88efbd&fccid=978d9fd9799d55a8&vjs=3',
    },
    {
      'Job Title': 'Healthcare Data Analyst',
      Company: 'AbsoluteCare',
      Location: 'Baltimore, MD',
      'Date Posted': '11 days ago',
      'Extract Date': '2021-04-09',
      Description:
        '5+ years of health care data interpretation, analysis, and reporting experience required, health plan/payer experience preferred.',
      Salary: '',
      'Job Url':
        'https://www.indeed.com/company/AbsoluteCARE/jobs/Healthcare-Data-Analyst-b02a319928cffc27?fccid=cd1b364f6763d12c&vjs=3',
    },
  ],
};

const CitySearchResultsContainer = ({
  cityData,
  fetchCityData,
  fetchSavedCity,
  pinCity,
  isFetching,
  isSaved,
  currentTemp,
}) => {
  const { push } = useHistory();

  const [cityAndState, setCityAndState] = useState(
    localStorage.getItem('cityAndState')
  );

  const [jobsData, setJobsData] = useState({});
  useEffect(() => {
    setJobsData(fakeJobsData);
  }, []);

  useEffect(() => {
    fetchCityData(cityAndState);
  }, [fetchCityData, cityAndState]);

  const savedNotification = () => {
    notification.open({
      message: 'City Pinned',
      description: `${cityData.city.city}, ${cityData.city.state}, has been pinned and can be viewed on the Pinned Cities page.`,
    });
  };

  const handleSaveCity = () => {
    const cityInfo = {
      city: cityData.city.city,
      state: cityData.city.state,
      rental_price: cityData.rental_price,
      crime: cityData.crime,
      air_quality_index: cityData.air_quality_index,
      walkability: cityData.walkability,
      livability: cityData.livability,
      population: cityData.population,
      diversity_index: cityData.diversity_index,
      latitude: cityData.latitude,
      longitude: cityData.longitude,
      profile_id: localStorage.getItem('token'),
      job_opportunities: cityData.job_opportunities,
    };
    pinCity(localStorage.getItem('token'), cityInfo);
    savedNotification();
    fetchSavedCity(localStorage.getItem('token'));
    push(`/pinned/${cityInfo.state}/${cityInfo.city}`);
  };

  const handleOnCityClick = cityAndState => {
    localStorage.setItem('cityAndState', JSON.stringify(cityAndState));
    setCityAndState(localStorage.getItem('cityAndState'));
    push(`/${cityAndState.state}/${cityAndState.city}`);
  };

  return (
    <>
      {isFetching ? (
        <div style={spinStyle}>
          <Spin tip="Loading..." size="large"></Spin>
        </div>
      ) : (
        <div>
          <Header />
          <RenderCitySearchResults
            cityData={cityData}
            currentTemp={currentTemp}
            jobsData={jobsData}
            handleSaveCity={handleSaveCity}
            isSaved={isSaved}
            handleOnCityClick={handleOnCityClick}
            city={cityAndState.city}
            state={cityAndState.state}
          />
          <Footer />
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.cityData.isFetching,
    error: state.cityData.error,
    cityData: state.cityData.city,
    currentTemp: state.cityData.currentTemp,
    savedCities: state.cityOperations.savedCities,
    isSaved: state.cityOperations.isSaved,
  };
};
export default connect(mapStateToProps, {
  fetchCityData,
  fetchSavedCity,
  pinCity,
})(CitySearchResultsContainer);
