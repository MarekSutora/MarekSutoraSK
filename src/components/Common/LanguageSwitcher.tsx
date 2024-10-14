import React from 'react';
import Image from 'next/image';
import SlovakiaFlag from '@/root/public/flags/svk.svg';

type Props = {};

const LanguageSwitcher = (props: Props) => {
  return (
    <div className="h-9 w-9">
      <Image
        src={SlovakiaFlag}
        alt="Language Icon"
      />
    </div>
  );
};

export default LanguageSwitcher;
