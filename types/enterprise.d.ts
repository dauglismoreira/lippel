interface Enterprise {
  id: number;
  product_id: number;
  stages_of_work_enumeration_id: number;
  enterprise_highlights_enumeration_id: number;
  apartment_highlights_enumeration_id: number;
  created_at: string;
  updated_at: string;
  stages_of_work_enumeration: Enumeration;
  enterprise_highlights_enumeration: Enumeration;
  apartment_highlights_enumeration: Enumeration;
}