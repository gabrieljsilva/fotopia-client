import React from 'react'
import { Row, Col } from 'antd'

import { UIProfileHeader } from 'shared/components'

export function Profile() {
  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <UIProfileHeader
          avatarImageUrl="https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?cs=srgb&dl=pexels-william-mattey-953457.jpg&fm=jpg"
          coverImageUrl="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          userName="Gabriel Silva"
          userEmail="gabrieldjs21@gmail.com"
        />
      </Col>
    </Row>
  )
}