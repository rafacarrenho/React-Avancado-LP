import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionScheduleProps } from 'types/api'

type Props = {
  sectionSchedule: SectionScheduleProps
}
const SectionAgenda = ({ sectionSchedule }: Props) => (
  <Container id="agenda">
    <Heading reverseColor>{sectionSchedule.title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: sectionSchedule.description }} />
  </Container>
)

export default SectionAgenda
