import React, { useCallback, useRef } from 'react'
import { Button } from 'antd'

import { UploadOutlined } from '@ant-design/icons'
import { validateFile } from 'utils'

interface UploadButtonProps {
  label: string
  acceptOnly?: string[]
  onChange?: (files: File[]) => void
}

export function UploadButton({
  label,
  acceptOnly = ['image/jpg', 'image/gif', 'image/png', 'image/jpeg'],
  onChange
}: UploadButtonProps) {
  function onFilesAdded(fileList: FileList | File[]) {
    const files = Array.from(fileList)
    const validatedFiles = files.filter((file) =>
      validateFile(file, acceptOnly)
    )
    onChange?.(validatedFiles)
  }

  const onButtonClick = useCallback(() => {
    inputRef.current?.click()
  }, [])

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <Button onClick={onButtonClick} icon={<UploadOutlined />}>
        {label}
      </Button>
      <input
        onChange={(e) => onFilesAdded(e.currentTarget.files || [])}
        ref={inputRef}
        type="file"
        multiple
        hidden
      />
    </div>
  )
}
