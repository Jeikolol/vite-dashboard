import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { Gear } from '@phosphor-icons/react/dist/ssr';
import { House } from '@phosphor-icons/react/dist/ssr/House';

export const navIcons = {
  home: House,
  config: Gear,
} as Record<string, Icon>;
