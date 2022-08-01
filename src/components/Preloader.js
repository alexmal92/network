import React from 'react'

const Preloader = ({size=57, color='#fff', speed=2.2}) => {
  return (
    <svg width={size} height={size}viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke={color}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle cx="5" cy="50" r="5">
            <animate attributeName="cy"
              begin="0s" dur={`${speed}s`}
              values="50;5;50;50"
              calcMode="linear"
              repeatCount="indefinite" />
            <animate attributeName="cx"
              begin="0s" dur={`${speed}s`}
              values="5;27;49;5"
              calcMode="linear"
              repeatCount="indefinite" />
          </circle>
          <circle cx="27" cy="5" r="5">
            <animate attributeName="cy"
              begin="0s" dur={`${speed}s`}
              from="5" to="5"
              values="5;50;50;5"
              calcMode="linear"
              repeatCount="indefinite" />
            <animate attributeName="cx"
              begin="0s" dur={`${speed}s`}
              from="27" to="27"
              values="27;49;5;27"
              calcMode="linear"
              repeatCount="indefinite" />
          </circle>
          <circle cx="49" cy="50" r="5">
            <animate attributeName="cy"
              begin="0s" dur={`${speed}s`}
              values="50;50;5;50"
              calcMode="linear"
              repeatCount="indefinite" />
            <animate attributeName="cx"
              from="49" to="49"
              begin="0s" dur={`${speed}s`}
              values="49;5;27;49"
              calcMode="linear"
              repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  )
}

export default Preloader