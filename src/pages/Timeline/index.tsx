import React from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { Flex } from 'shared/components'

export function Timeline() {
  return (
    <Flex justify="flex-end" margin="16px 0px 16px 0px">
      <Button type="primary" icon={<PlusOutlined />}>
        Postar álbum
      </Button>
    </Flex>
  )
}
