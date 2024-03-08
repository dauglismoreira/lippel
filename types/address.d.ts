interface Address {
  id: number;
  street: string;
  city_id: number;
  state_id: number;
  zip_code: null | string;
  number: null | string;
  neighborhood: null | string;
  complement: string;
  country: string;
  iframe: string;
  nearby: null; // Adjust type if nearby has a known structure
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
  state: State;
  city: City;
}