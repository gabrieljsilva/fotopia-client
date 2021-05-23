import React from 'react'
import { Form, Input, Button, Grid } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { blue } from '@ant-design/colors'
import { Link } from 'react-router-dom'

import Checkbox from 'antd/lib/checkbox/Checkbox'
import { Flex } from 'shared/components'

const { useBreakpoint } = Grid

export function LogInForm() {
  const screens = useBreakpoint()

  function handleLogin(values: any) {
    // console.log(values)
  }

  return (
    <Form
      name="login"
      style={{ width: screens.xs ? '300px' : '320px' }}
      onFinish={handleLogin}
      initialValues={{ remember: false }}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Insira seu E-mail' }]}>
        <Input
          size="large"
          placeholder="E-mail"
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
        <Flex justify="space-between" items="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Lembrar senha</Checkbox>
          </Form.Item>

          <Button type="link">Esqueci minha senha</Button>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Link to="/timeline">
          <Button type="primary" htmlType="submit" block>
            Entrar
          </Button>
        </Link>
      </Form.Item>
    </Form>
  )
}
