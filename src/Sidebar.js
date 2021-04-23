import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav'
import styled from 'styled-components'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

function Sidebar() {
  return (
    <Wrapper>
      <SideNav
        className='sidebar'
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected='home'>
          <NavItem eventKey='home'>
            <NavIcon>
              <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey='charts'>
            <NavIcon>
              <i
                className='fa fa-fw fa-line-chart'
                style={{ fontSize: '1.75em' }}
              />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey='charts/linechart'>
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey='charts/barchart'>
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  .sidebar {
    background: #3f3f3f;
  }
`
