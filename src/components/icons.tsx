import type { ComponentPropsWithoutRef, FC } from 'react'
import IcoMoon, { IconProps, iconList } from 'react-icomoon'

import iconSet from '@/assets/icons.json'

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />

export default Icon

export const ButtonRefreshArrow: FC<ComponentPropsWithoutRef<'svg'>> = ({
  className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      d="M10.66,20.07a1.25,1.25,0,0,0-.5,2.45,11,11,0,0,0,2.2.23,10.75,10.75,0,1,0-10-6.65.24.24,0,0,1-.09.29l-1,.73a1,1,0,0,0-.39,1,1,1,0,0,0,.77.77l4,.85.21,0a1,1,0,0,0,.54-.16A1.05,1.05,0,0,0,6.83,19l.94-4.4a1,1,0,0,0-1.56-1l-1.37,1a.24.24,0,0,1-.22,0,.22.22,0,0,1-.16-.16,8.26,8.26,0,1,1,6.2,5.64Z"
      fill="currentColor"
    />
  </svg>
)

export const Logomark: FC<ComponentPropsWithoutRef<'svg'>> = ({
  className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 65 57"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M33.12 41.56a.19.19 0 0 1-.33-.02l-3.94-7.13a4.34 4.34 0 0 1 .2-3.93L39.87 11.3c1.07-1.89 2.48-2.77 4.46-2.77 1.54 0 2.83.71 3.57 1.64 1 1.26 1.2 3.03.32 4.6l-15.1 26.8Zm-10.55-18.5a.13.13 0 0 1-.22 0l-5.2-9.1c-1.32-2.32-.21-5.22 3-5.22h4.73c3.08 0 4.22 2.86 2.9 5.18l-5.2 9.14ZM40.56 0c-1.15 0-2.38.31-3.33.95a8.6 8.6 0 0 0-1.88 2.14c-.03.05-.07.07-.1.07-.04 0-.08-.02-.12-.06-.42-.57-.88-1.45-1.61-2.03A5.27 5.27 0 0 0 30.09 0S10.99.02 4.56 0a3.53 3.53 0 0 0-3.13 5.36C8.5 17.82 22.8 42.97 29.83 55.2a3.54 3.54 0 0 0 3.16 1.83 3.5 3.5 0 0 0 3.08-1.81C43.1 43 57.28 17.84 64.41 5.38 65.78 2.98 64.4 0 61.3 0H40.56Z"
    />
  </svg>
)

export const NavigationMenu: FC<ComponentPropsWithoutRef<'svg'>> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <g>
      <rect x={0.5} y={2.5} width={23} height={3} rx={1} fill="currentColor" />
      <rect x={0.5} y={10.5} width={23} height={3} rx={1} fill="currentColor" />
      <rect x={0.5} y={18.5} width={23} height={3} rx={1} fill="currentColor" />
    </g>
  </svg>
)

export const SmallCloseIcon: FC<ComponentPropsWithoutRef<'svg'>> = ({
  className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Zm2.93-3.07a.86.86 0 0 0 .02-1.2L7.2 6l1.74-1.73a.87.87 0 0 0-.02-1.2.86.86 0 0 0-1.2 0L6 4.78 4.26 3.05a.88.88 0 0 0-1.2.01.88.88 0 0 0 0 1.2l1.73 1.73-1.74 1.75c-.3.3-.31.86.02 1.19.32.33.9.32 1.2.01L6 7.2l1.74 1.74c.31.31.86.31 1.2-.01Z"
    />
  </svg>
)

export const SmallFullScreenIcon: FC<ComponentPropsWithoutRef<'svg'>> = ({
  className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12ZM3.85 5.27l2.88 2.88a.5.5 0 0 1-.35.85H4a1 1 0 0 1-1-1V5.62a.5.5 0 0 1 .85-.35ZM8 3a1 1 0 0 1 1 1v2.38a.5.5 0 0 1-.85.35L5.27 3.85A.5.5 0 0 1 5.62 3H8Z"
      transform="matrix(-1 0 0 1 12 0)"
    />
  </svg>
)

export const VideoGamePC: FC<ComponentPropsWithoutRef<'svg'>> = ({
  className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <g>
      <path
        d="M6,3.75H9a2,2,0,0,1,2,2v4.5a1,1,0,0,0,2,0V5.75a4,4,0,0,0-4-4H6a1,1,0,0,0,0,2Z"
        fill="currentColor"
      />
      <path
        d="M18.5,11.25a5.54,5.54,0,0,0-3.64,1.37.46.46,0,0,1-.33.13H9.47a.46.46,0,0,1-.33-.13,5.5,5.5,0,1,0,0,8.26.46.46,0,0,1,.33-.13h5.06a.46.46,0,0,1,.33.13,5.5,5.5,0,1,0,3.64-9.63Zm-11.25,6H6.5a.5.5,0,0,0-.5.5v.75a.75.75,0,0,1-1.5,0v-.75a.5.5,0,0,0-.5-.5H3.25a.75.75,0,0,1,0-1.5H4a.5.5,0,0,0,.5-.5V14.5a.75.75,0,0,1,1.5,0v.75a.5.5,0,0,0,.5.5h.75a.75.75,0,0,1,0,1.5Zm8.75.5a1,1,0,1,1,1-1A1,1,0,0,1,16,17.75Zm2.5,2.5a1,1,0,1,1,1-1A1,1,0,0,1,18.5,20.25Zm0-5a1,1,0,1,1,1-1A1,1,0,0,1,18.5,15.25Zm2.5,2.5a1,1,0,1,1,1-1A1,1,0,0,1,21,17.75Z"
        fill="currentColor"
      />
    </g>
  </svg>
)
