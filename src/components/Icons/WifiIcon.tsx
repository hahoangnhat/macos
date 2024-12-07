import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} viewBox="0 -2 14 14" {...props}>
    <title>{'wifi [#1012]'}</title>
    <path
      fill="#000"
      fillRule="evenodd"
      d="M5.6 8.586 7 10l1.4-1.414a1.965 1.965 0 0 0-2.8 0M2.8 5.758l1.4 1.414a3.936 3.936 0 0 1 5.6 0l1.4-1.414a5.896 5.896 0 0 0-8.4 0M14 2.928l-1.4 1.415a7.873 7.873 0 0 0-11.2 0L0 2.929a9.83 9.83 0 0 1 14 0"
    />
  </svg>
)
export default SvgComponent
