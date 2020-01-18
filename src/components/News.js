import React from 'react';

const styles = {
  headingText: {
    marginTop: 50,
    color: 'white'
  },
  h4Text: {

    color: 'white',

  },
  image: {
    width: 170,
    height: 100,
    borderRadius: 10
  }
}
/**
 * news mock component, displays mock images and text for news
 */
const News = () => {
  return (
    <div>
      <h2 style={styles.headingText}>News</h2>
      <div className="news-grid">
        <div>
          <img style={styles.image} src="http://flatfull.com/wp/bepop/wp-content/uploads/2019/06/pexels-photo-2524603.jpeg" alt="news" />
          <h4 style={styles.h4Text}>Et dolore nulla in cupidatat deserunt voluptate enim...</h4>
        </div>

        <div>
          <img style={styles.image} src="http://flatfull.com/wp/bepop/wp-content/uploads/2019/06/pexels-photo-2524603.jpeg" alt="news" />
          <h4 style={styles.h4Text}>Et dolore nulla in cupidatat deserunt voluptate enim...</h4>

        </div>

        <div>
          <img style={styles.image} src="http://flatfull.com/wp/bepop/wp-content/uploads/2019/06/pexels-photo-2524603.jpeg" alt="news" />
          <h4 style={styles.h4Text}>Et dolore nulla in cupidatat deserunt voluptate enim...</h4>

        </div>
      </div>
    </div>
  )
}

export default News;