import React from 'react'
import LogoIcon from '../../../public/nt_logo.png'
import Image from 'next/image'
export const Logo = () => {
  return (
    /* eslint-disable @next/next/no-img-element */
    <Image
      alt="Nirvatatva Logo"
      className="max-w-[9.375rem] invert dark:invert-0"
      src={LogoIcon}
    />
  )
}
