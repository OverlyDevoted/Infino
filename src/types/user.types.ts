export interface UserData {
  person: Person;
  stat: string;
}

export interface Person {
  id: string;
  nsid: string;
  ispro: number;
  is_deleted: number;
  iconserver: string;
  iconfarm: number;
  path_alias: null;
  has_stats: number;
  username: Content;
  realname: Content;
  description: Content;
  photosurl: Content;
  profileurl: Content;
  mobileurl: Content;
  photos: PhotoHistory;
  has_adfree: number;
  has_free_standard_shipping: number;
  has_free_educational_resources: number;
}

export interface Content {
  _content: string | number;
}

export interface PhotoHistory {
  firstdatetaken: Content;
  firstdate: Content;
  count: Content;
}
