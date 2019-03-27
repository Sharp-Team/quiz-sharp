import React from 'react'
import { connect } from 'react-redux'
import HomeGuest from '../../components/HomeGuest'
import HomeUser from '../../components/HomeUser'
import queryString from 'query-string'

class HomePage extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {
      page: 1
    }
  }

  checkUpdate: boolean = false;

  componentDidMount() {
    // get parameter to paging, default is 1
    const page = queryString.parse(this.props.location.search).page || 1
    this.setState({
      page: page
    })
  }

  componentDidUpdate(prevProps: any) {
    if(prevProps.location.search !== this.props.location.search) {
      const page = queryString.parse(this.props.location.search).page || 1
      this.setState({
        page: page
      })
    }
  }

  render() {
    return(
      <React.Fragment>
        {
          this.props.user === null && 
          <HomeGuest page={this.state.page} />
        }
        {
          this.props.user !== null && 
          <HomeUser page={this.state.page} />
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
