import React, { useState } from 'react'
import { Row, Col, Tabs } from 'antd'
import { Link } from 'react-router-dom'

import { Flex } from 'shared/components'
import { RegisterForm, LogInForm } from 'modules/access'

export function Access() {
  const [activeTab, setActiveTab] = useState('1')

  return (
    <Row>
      <Col xs={0} xl={14}>
        <Flex minHeight="100vh" items="center">
          <img src="/images/ilustration2.svg" style={{ width: '100%' }} />
        </Flex>
      </Col>
      <Col xs={24} xl={10}>
        <Flex
          minHeight="100vh"
          direction="column"
          justify="center"
          items="center">
          <Link to="/">
            <img
              src="/images/fotopia_logo_horizontal.png"
              alt="logo"
              style={{ width: '180px', marginBottom: '20px' }}
            />
          </Link>

          <Tabs
            defaultActiveKey="1"
            activeKey={activeTab}
            onChange={setActiveTab}>
            <Tabs.TabPane tab="Entrar" key="1">
              <LogInForm />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Cadastrar" key="2">
              <RegisterForm />
            </Tabs.TabPane>
          </Tabs>
        </Flex>
      </Col>
    </Row>
  )
}
