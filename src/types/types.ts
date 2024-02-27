export type Category = {
  label: string;
  id: string;
};

export type Tag = {
  state?: 'saved' | 'temporary';
  label: string;
  id: string;
  isLevel: boolean;
  categoryId: string;
  level?: number;
};
