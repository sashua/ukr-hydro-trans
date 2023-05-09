import type { HTMLAttributes } from 'astro/types';
import { GoodDescription } from './GoodDescription';

export const GoodPhoto = ({ good }) => {
  const { id, name, subname, description } = good;
  return (
    <div class="pb-8 pt-48 sm:bg-neutral sm:pl-12 lg:relative lg:flex-grow lg:pb-78">
      <p class="mb-4 text-md-400">
        <span class="mr-6 text-xxl-500">{id}</span>
        {subname}
      </p>
      <h3 class="text-H4-mobile lg:text-H4-desktop">{name}</h3>
      <div class="hidden lg:absolute lg:bottom-0 lg:left-0 lg:block lg:max-w-[500px]">
        <GoodDescription good={good} />
      </div>
    </div>
  );
};
