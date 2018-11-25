import React from 'react'

import Layout from '../components/layout'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  center: {
     margin: '0 auto',
     maxWidth: '960px',
     padding: '1.45rem 1.0875rem',
     textAlign: 'center'
   }
})

const IndexPage = () => (
  <Layout>
    <h1 className={css(styles.center)}>Coming soon!</h1>
  </Layout>
)

export default IndexPage
