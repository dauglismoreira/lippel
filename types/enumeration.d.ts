interface Enumeration {
  id: number;
  name_pt_br: string;
  name_en: null | string;
  name_es: null | string;
  description_pt_br: null | string;
  description_en: null | string;
  description_es: null | string;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
  items: EnumerationItem[];
}