import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 483.5 483.5"
    {...props}
  >
    <path d="M354.75 113h-227.5C56.946 113.827 0 171.258 0 241.75s56.946 127.923 127.25 128.731c0 .019 227.5.019 227.5.019 70.993 0 128.75-57.757 128.75-128.75S425.743 113 354.75 113zm-226 227.5C74.299 340.5 30 296.201 30 241.75S74.299 143 128.75 143s98.75 44.299 98.75 98.75-44.299 98.75-98.75 98.75z" />
  </svg>
)
export default SvgComponent
