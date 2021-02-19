import React from "react";

// edit 111 and the page will display stale docgenInfo
// edit 222 and the page will display correct docgenInfo

export interface MyButtonProps {
  /** foo comment
   * TRY EDIT HERE 111
   * (try edit and save file several times) */
  foo?: string
}

export function MyButton(props: MyButtonProps) {
  return <button>AND TRY EDIT HERE TOO 222</button>
}
