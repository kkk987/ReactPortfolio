import React, { Component, Fragment } from 'react';
import { Navbar, Section } from 'react-bulma-components';
import Nav from './Nav';
import Banner from './Banner';
import 'bulma-divider';
import SocialLink from './SocialLink';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  handleClick = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    const { active } = this.state
    const { resumeData } = this.props;
    const { socialLinks } = resumeData
    return (
      <Fragment>
          <Section class="hero is-fullheight bg-img img-responsive">
            
            <div class="hero-head">
              <Navbar color="info" fixed="top" active={active} >
                <Navbar.Brand>
                  <Navbar.Burger 
                    onClick={this.handleClick} 
                  />
                </Navbar.Brand>
                <Navbar.Menu>
                  <Nav />
                </Navbar.Menu>
              </Navbar>
            </div>
            <div class="hero-body">
              <div class="container">
                <Section>
                  <Banner 
                    resumeData={resumeData}
                  />
                </Section>
                  <div 
                    class=
                      "is-divider" 
                    // data-content=
                    //   "SOCIAL LINKS"
                    >
                  </div>
                <Section>
                  {socialLinks && socialLinks.map(socialLink => (
                    <SocialLink 
                      key={socialLink.name}
                      name={socialLink.name}
                      url={socialLink.url}
                      iconName={socialLink.iconName}
                    />
                  ))}
                </Section>
              </div>
            </div>

            <div class="hero-foot">
            </div>
          </Section>

          

        </Fragment>
   
    )
  }
}
