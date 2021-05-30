import React, { useRef, useCallback } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { blue } from '@ant-design/colors'
import { Card } from 'antd'

import { Flex, Text } from 'shared/components'
import { validateFile } from 'utils'

interface UploadAreaProps {
  acceptOnly?: string[]
  onChange?: (Files: File[]) => void
}

export function UploadArea({
  acceptOnly = ['image/jpg', 'image/gif', 'image/png', 'image/jpeg'],
  onChange
}: UploadAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function onFilesAdded(fileList: FileList | File[]) {
    const files = Array.from(fileList)
    const validatedFiles = files.filter((file) =>
      validateFile(file, acceptOnly)
    )
    onChange?.(validatedFiles)
  }

  const onUploadAreaClick = useCallback(() => {
    inputRef.current?.click()
  }, [])

  function onDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
  }

  function onDragEnter(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
  }

  function onDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
  }

  return (
    <Card
      hoverable
      bordered
      onDrop={(event) => {
        event.preventDefault()
        onFilesAdded(event.dataTransfer.files)
      }}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onClick={onUploadAreaClick}>
      <Flex direction="column" justify="center" items="center" width="100%">
        <UploadOutlined
          style={{
            fontSize: '64px',
            marginBottom: '10px',
            color: blue.primary
          }}
        />
        <Text size="20px" fontWeight={100}>
          Clique ou solte suas fotos aqui
        </Text>
        <input
          onChange={(e) => onFilesAdded(e.currentTarget.files || [])}
          ref={inputRef}
          type="file"
          hidden
          multiple
        />
      </Flex>
    </Card>
  )
}
