import React from 'react'
import { connect } from 'react-redux'
import HomeGuest from '../../components/HomeGuest'
import HomeUser from '../../components/HomeUser'

class HomePage extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  render() {
    return(
      <React.Fragment>
        {
          this.props.user === null && 
          <HomeGuest />
        }
        {
          this.props.user !== null && 
          <HomeUser />
        }
      </React.Fragment>
    )
  }
}
function mapStateToProps(state: any) {
  const user = state.user
  return { user }
}

export default connect(mapStateToProps)(HomePage)
