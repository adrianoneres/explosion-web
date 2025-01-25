import Image from "next/image";

import trophy from '../../../public/trophy.png';
import classNames from "classnames";

type TrophyProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string;
}

export function Trophy({ size = 'md', className }: TrophyProps) {
  return (
    <span>
      <Image src={trophy} alt="Trophy" className={classNames(`${className} rotate-6`, {
        'max-w-10': size === 'lg',
        'max-w-6': size === 'md',
        'max-w-4': size === 'sm'
      })} />
    </span>
  )
}