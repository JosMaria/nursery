export type NavLinkItemType = {
  title: string;
  path: string;
};

export type SidebarDataType = {
  header: string;
  content: NavLinkItemType[];
};
