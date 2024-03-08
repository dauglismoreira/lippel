interface Image {
  id: number;
  src: string;
  alt_pt_br: string;
  alt_en: string | null;
  alt_es: string | null;
  mime: string;
  width: number;
  height: number;
  tag_pt_br: null | string;
  tag_en: null | string;
  tag_es: null | string;
  cta_pt_br: null | string;
  cta_en: null | string;
  cta_es: null | string;
  cta_description_pt_br: null | string;
  cta_description_en: null | string;
  cta_description_es: null | string;
  link: null | string;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
}