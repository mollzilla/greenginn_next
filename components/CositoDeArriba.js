import React from 'react';
import styles from './CositoDeArriba.module.css'
import Paper from '@material-ui/core/Paper';
import ColorButton from '@material-ui/core/Button';

export default function CositoDeArriba(props) {

  const { pairData, handlePairChange, clearPairSelection, pair } = props;

  const onPairSelect = (symbol, description) => {
    handlePairChange(symbol, description);
  }

  return (
    <div>
      <Paper elevation={3} className={styles.cositoDeArriba}>
        <div className={styles.header}>
          <h4>Choose Pair</h4>
          <ColorButton
            onClick={() => clearPairSelection() }
            variant="contained"
            color="primary"
            className={styles.clearPairSelection}
          >
            Clear pair selection
          </ColorButton>
        </div>
        <div className={styles.buttonContainer}>
          {pairData.map((onePair, i) =>
            <ColorButton
              onClick={() => { onPairSelect(onePair.url_symbol, onePair.description) }}
              variant="contained"
              color="primary"
              className={
                onePair.url_symbol===pair.symbol ?
                  styles.selectedPairButton :
                  styles.pairButton
              }
              key={i}>
              {onePair.description}
            </ColorButton>
          )}
        </div>
      </Paper>
    </div>
  )
}