import React, { useState, useRef, useCallback, useEffect } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { blue } from '@ant-design/colors'
import { Card } from 'antd'

import { Flex, Text } from 'shared/components'

interface UploadAreaProps {
  acceptOnly?: string[]
  onChange?: (Files: File[]) => void
  browseFilesOn?: boolean
}

export function UploadArea({
  acceptOnly = ['image/jpg', 'image/gif', 'image/png', 'image/jpeg'],
  onChange,
  browseFilesOn
}: UploadAreaProps) {
  const [selectedFiles, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  function validateFile(file: File) {
    return acceptOnly?.includes(file.type)
  }

  function onFilesAdded(fileList: FileList | File[]) {
    const files = Array.from(fileList)
    const validatedFiles = files.filter((file) => validateFile(file))
    setFiles([...selectedFiles, ...validatedFiles])
  }

  useEffect(() => {
    onChange?.(selectedFiles)
  }, [selectedFiles])

  useEffect(() => {
    inputRef.current?.click()
  }, [browseFilesOn])

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
