import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout'
import AvgTickerValues from "../../components/AvgTickerValues";
import TradingPairsContainer from "../../components/TradingPairsContainer";
import styles from '../../components/AppContainer.module.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function AppContainer(props) {

  const { pairsData } = props;

  return (
    <Layout>
      <Container className={styles.AppContainer} maxWidth="xl">
        <h1>
          WELCOME TO MY GREENGINN ASSIGNMENT
        </h1>
        <h4> This will be the main container of the single page App.</h4>
        <h5> <Link href="/">
          <a>Take me to Index</a>
        </Link>
        </h5>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <AvgTickerValues />
          <TradingPairsContainer pairsData={pairsData} />
        </Grid>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(context) {


    let pairsData=[];

    try {    
      let resp = await fetch("https://www.bitstamp.net/api/v2/trading-pairs-info/");
      pairsData=await resp.json();
    } catch (error) {
      console.log(error)
    }      



  return {
    props: {
      mili: "mili",
      pairsData: pairsData
    }, // will be passed to the page component as props
  }
}
