import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <br />
        Mohiuddin Shoikot
      </SectionTitle>

      <SectionText>
        Coding on ReactJS and dreaming on ReactJS. Helping companies to build complex mobile application serving 60,000+ active users with React Native and mordern technologies.
      </SectionText>
      <Button onClick={()=> window.location="https://www.linkedin.com/in/mohiuddin-shoikot-362b23123/"} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;