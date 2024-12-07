import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 64 64" {...props}>
    <path d="M27 9C17.075 9 9 17.075 9 27s8.075 18 18 18c4.13 0 7.926-1.413 10.967-3.76l13.082 13.082a2.315 2.315 0 1 0 3.273-3.273L41.24 37.967C43.587 34.927 45 31.129 45 27c0-9.925-8.075-18-18-18zm0 4c7.719 0 14 6.281 14 14s-6.281 14-14 14-14-6.281-14-14 6.281-14 14-14z" />
  </svg>
)
export default SvgComponent
