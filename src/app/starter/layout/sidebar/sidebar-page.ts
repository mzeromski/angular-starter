import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface SidebarPage {
  name: string;
  path: string;
  icon: IconDefinition;
  childs?: SidebarPage[];
  text?: string;
  number?: number;
}
