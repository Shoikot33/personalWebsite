import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 80000, text: 'Active Users throughout the apps', },
  { number: 5, text: 'Open Source Projects' },
  { number: 1, text: 'IEEE Published Papers', },
  { number: 1, text: 'Jurnal', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider /> <br />
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
