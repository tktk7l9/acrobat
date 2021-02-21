import React, { FC } from "react"

type Props = {}

export const Footer: FC<Props> = (props) => {
  return (
    <footer className="bg-white dark:bg-black sticky top-0">
      <div className="p-2 text-center dark:text-gray-500 text-xs">
        Copyright © 2021 by Takuya Saito
      </div>
    </footer>
  )
}
