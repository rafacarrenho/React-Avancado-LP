import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'
import { PricingBoxProps } from 'types/api'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

type Props = {
  pricingBox: PricingBoxProps
}
const PricingBox = ({ pricingBox }: Props) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${pricingBox.totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{pricingBox.numberInstallments}x de</span> R$
        {pricingBox.priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.Benefits
      dangerouslySetInnerHTML={{ __html: pricingBox.benefits }}
    ></S.Benefits>

    <Button href={pricingBox.button.url} onClick={onClick} withPrice>
      <p>{pricingBox.button.label}</p>
      <div>
        <S.ButtonDiscountPrice>R${pricingBox.totalPrice}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
