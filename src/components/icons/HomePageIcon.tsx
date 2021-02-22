import React, { FC } from "react"

type Props = {}

export const HomePageIcon: FC<Props> = (props) => {
  const {} = props

  return (
      <svg viewBox="0 0 27 27" width="30" height="30">
          <path
              fill="currentColor"
              d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
          />
      </svg>
  )
}
