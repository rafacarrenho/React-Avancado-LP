import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionAboutProject: SectionAboutProjectProps
}
const SectionAboutProject = ({ sectionAboutProject }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(sectionAboutProject.media.url)}
          alt={sectionAboutProject.media.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{sectionAboutProject.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: sectionAboutProject.description
            }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
