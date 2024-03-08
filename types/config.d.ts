type SiteConfigType = {
  id: number;
  key: string;
  value: string;
  description: string | null;
  link: string | null;
  iframe: string | null;
  email: string | null;
  phone: string | null;
  category_config_id: number;
  enumeration_id: number | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  enumeration: EnumerationType | null;
}

type ConfigCategoryType = {
  id: number;
  name: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  configs?: SiteConfigType[];
}

type ResponseConfigsType = {
  configs: ConfigCategoryType[]
}
