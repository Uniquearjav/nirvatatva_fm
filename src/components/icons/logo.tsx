import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/nt_logo.png'

export function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
  <Image src={Logo} alt="Nirvatatva FM" width={150} height={50} className={clsx('h-8 w-auto', props.className)}  />  
  )
}
