import TChart from 'component/Chart'
import React from 'react'
import { connect } from 'react-redux'

function TestProvider(props) {
  return <TChart state={props.chartData} />
}

const mapStateToProps = (state) => ({
  chartData: state
})


export default connect(mapStateToProps, null)(TestProvider)