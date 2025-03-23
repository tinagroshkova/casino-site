export interface ImageData {
  id?: number;
  image: string;
  heroTitle?: string;
}

export interface NavItem {
  title: string;
  dropdown?: { title: string }[];
  image?: string;
}

export interface NavData {
  left: {
    title: string;
    dropdown?: { title: string; image?: string }[];
  }[];
  right: {
    title: string;
    image?: string;
    dropdown?: { title: string; image?: string }[];
  }[];
}

export interface DropdownItem {
  title: string;
  image?: string;
  dropdown?: DropdownItem[];
}

export interface ProductData {
  heading: string;
  image: string;
}
