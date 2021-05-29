import React from 'react'
import { Button, Form, Input, Grid } from 'antd'
import { Flex, Text } from 'shared/components'
import { Link } from 'react-router-dom'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { blue, grey } from '@ant-design/colors'

const { useBreakpoint } = Grid

export function EditPersonalData() {
  const screens = useBreakpoint()

  return (
    <Flex flex="1" direction="column" justify="center" items="center">
      <Text
        size="24px"
        align="center"
        color={grey[5]}
        style={{ marginBottom: '20px' }}>
        Editar perfil
      </Text>
      <Form
        name="login"
        style={{ width: screens.xs ? '300px' : '320px' }}
        initialValues={{ remember: false }}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Insira seu nome' }]}>
          <Input
            size="large"
            placeholder="Nome completo"
            prefix={<UserOutlined style={{ color: blue.primary }} />}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Insira seu E-mail' }]}>
          <Input
            size="large"
            placeholder="E-mail"
            style={{ width: '100%' }}
            prefix={<MailOutlined style={{ color: blue.primary }} />}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Insira sua senha' }]}>
          <Input
            size="large"
            placeholder="Senha"
            type="password"
            prefix={<LockOutlined style={{ color: blue.primary }} />}
          />
        </Form.Item>

        <Form.Item>
          <Link to="/timeline">
            <Button type="primary" htmlType="submit" block>
              Salvar
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </Flex>
  )
}
