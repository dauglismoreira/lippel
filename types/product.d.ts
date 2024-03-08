interface ProductResponse {
  product: Product
}

interface Product {
  id: number;
  type: string;
  name: string;
  slug: string;
  published: number;
  seo_title: string;
  seo_description: string;
  subtitle: string;
  description: string;
  video_id: number;
  address_id: number;
  tag_id: number;
  logo_image_id: number;
  square_image_id: number;
  vertical_image_id: number;
  horizontal_image_id: number;
  highlights_enumeration_id: number;
  nearby_enumeration_id: number;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
  enterprise: Enterprise;
  subdivision: null; // Adjust type if subdivision has a known structure
  property: null; // Adjust type if property has a known structure
  square_image: Image;
  logo_image: Image;
  vertical_image: Image;
  horizontal_image: Image;
  video: Video;
  address: Address;
  galleries: Gallery[];
  tag: Tag;
  highlights_enumeration: Enumeration;
  nearby_enumeration: Enumeration;
}