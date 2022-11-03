import React from 'react'

interface PreloaderProps {
  size?: number
  color?: string
  speed?: number
}

export const Preloader = ({ size = 57, color = '#fff', speed = 2.2 }:PreloaderProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke={color}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle cx="5" cy="50" r="9">
            <animate attributeName="cy"
              begin="0s" dur={`${speed}s`}
              values="46;9;46;46"
              calcMode="linear"
              repeatCount="indefinite" />
            <animate attributeName="cx"
              begin="0s" dur={`${speed}s`}
              values="9;27;46;9"
              calcMode="linear"
              repeatCount="indefinite" />
          </circle>
          <circle cx="27" cy="5" r="9">
            <animate attributeName="cy"
              begin="0s" dur={`${speed}s`}
              from="5" to="5"
              values="9;46;46;9"
              calcMode="linear"
              repeatCount="indefinite" />
            <animate attributeName="cx"
              begin="0s" dur={`${speed}s`}
              from="27" to="27"
              values="27;46;9;27"
              calcMode="linear"
              repeatCount="indefinite" />
          </circle>
          <circle cx="49" cy="50" r="9">
            <animate attributeName="cy"
              begin="0s" dur={`${speed}s`}
              values="46;46;9;46"
              calcMode="linear"
              repeatCount="indefinite" />
            <animate attributeName="cx"
              from="49" to="49"
              begin="0s" dur={`${speed}s`}
              values="46;9;27;46"
              calcMode="linear"
              repeatCount="indefinite" />
          </circle>
        </g>
      </g>
    </svg>
  )
}