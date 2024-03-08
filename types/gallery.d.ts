interface Gallery {
  id: number;
  type: string;
  name_pt_br: string;
  name_en: null | string;
  name_es: null | string;
  order: null | number;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
  pivot: {
    product_id: number;
    gallery_id: number;
  };
  images: Image[];
  videos: Video[]; // Adjust if videos have a specific structure
}