interface EnumerationItem {
  id: number;
  name_pt_br: string;
  name_en: string;
  name_es: string;
  description_pt_br: null | string;
  description_en: null | string;
  description_es: null | string;
  link: null | string;
  integer: null | number;
  order: null | number;
  enumeration_id: number;
  icon_id: null | number;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
  icon: null | Icon;
}