import React from 'react'
import { Form, Input, Button, Grid } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
import { blue } from '@ant-design/colors'

const { useBreakpoint } = Grid

export function RegisterForm() {
  const screens = useBreakpoint()

  return (
    <Form name="register" style={{ width: screens.xs ? '280px' : '320px' }}>
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
          prefix={<MailOutlined style={{ color: blue.primary }} />}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Insira sua senha' }]}>
        <Input
          size="large"
          placeholder="Senha"
          prefix={<LockOutlined style={{ color: blue.primary }} />}
        />
      </Form.Item>

      <Form.Item>
        <Button type="link" style={{ padding: '0px' }}>
          Já tenho uma conta
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" block>
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  )
}
