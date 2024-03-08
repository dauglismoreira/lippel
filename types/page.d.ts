type PageResponseType = {
  page: PageType
}

type PageType = {
  id: number;
  name_pt_br: string;
  name_en: string | null;
  name_es: string | null;
  description_pt_br: string;
  description_en: string | null;
  description_es: string | null;
  vertical_image_id: number | null;
  horizontal_image_id: number | null;
  square_image_id: number | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  horizontal_image: Image;
  vertical_image: Image;
  square_image: Image;
  components: PageComponent[];
}