import React from 'react';

const styles = {
  headingText: {
    marginTop: 100,
    color: 'white',
  },
  pText: {
    textAlign: 'center',
    paddingTop: 20,
    color: 'white',
    fontSize: 20
  },
}
/**
 * event mock component,displays events
 */
const Events = () => {
  return (
    <div>
      <h2 style={styles.headingText}>Events</h2>
      <div className="event-grid">
        <div className="radio-chart">
          <p style={styles.pText}>Radio </p>
        </div>

        <div className="voice-2019">
          <p style={styles.pText}> Voice 2019 </p>
        </div>
      </div>
    </div>
  )
}

export default Events;