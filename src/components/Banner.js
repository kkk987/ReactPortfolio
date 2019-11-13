import React, {Fragment} from "react"
import { Heading, Section } from 'react-bulma-components';

const Banner = props => {
  const {resumeData} = props
  const {name, role, roleDescription} = resumeData
  return (
    <Fragment>
      <Section className="content">
        <Heading>
          I am {name}
        </Heading>
        <p>
          I am a {role}.
        </p>
        <p>
          {roleDescription}
        </p>
      </Section>
    </Fragment>
  )
}

export default Banner