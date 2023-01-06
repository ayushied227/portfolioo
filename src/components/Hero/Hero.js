import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import styled from 'styled-components';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, my name is <br/>
          Ayushi Dufare<br />
          I am a Web Developer.
        </SectionTitle>
        <SectionText>
        I'm Electronics Engineer with a keen interest in web technologies. I specialize in building web applications implementing pixel UI to live code...
        </SectionText>
        <Button onClick={props.handleClick}>Read More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;