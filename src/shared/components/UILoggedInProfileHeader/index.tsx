import React from 'react'

import { useSelector } from 'store'
import { UIProfileHeader } from 'shared/components'

export function UILoggedInProfileHeader() {
  const user = useSelector((state) => state.user)

  return (
    <UIProfileHeader
      userEmail={user.email}
      userName={user.name}
      avatarImageUrl={user.avatar}
      coverImageUrl={user.cover}
    />
  )
}
