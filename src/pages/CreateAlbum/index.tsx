import React, { useState } from 'react'
import { Row, Col, Input, Button } from 'antd'

import {
  Flex,
  UILoggedInProfileHeader,
  UploadArea,
  MasonaryImageGrid
} from 'shared/components'

export function CreateAlbum() {
  const [filelist, setFilelist] = useState<File[]>([])
  const [refresh, setRefresh] = useState(false)

  function handleFileChange(files: File[]) {
    setFilelist(files)
  }

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <UILoggedInProfileHeader />
      </Col>
      <Col span={24} hidden={filelist.length > 0}>
        <UploadArea browseFilesOn={refresh} onChange={handleFileChange} />
      </Col>
      <Col span={8} hidden={filelist.length === 0}>
        <Input placeholder="Título do álbum" />
      </Col>
      <Col span={16} hidden={filelist.length === 0}>
        <Flex justify="flex-end" items="center">
          {/* ADICIONAR FUNÇÃO PARA CHAMAR O SELETOR DE ARQUIVOS */}
          <Button onClick={() => setRefresh(!refresh)}>
            Adicionar mais images
          </Button>
          <Button style={{ marginLeft: '10px' }} type="primary">
            Salvar Álbum
          </Button>
        </Flex>
      </Col>
      <Col span={24}>
        <MasonaryImageGrid
          images={filelist.map((file) => ({ url: URL.createObjectURL(file) }))}
        />
      </Col>
    </Row>
  )
}
