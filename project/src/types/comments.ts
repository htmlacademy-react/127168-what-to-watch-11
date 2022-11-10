type Comment = {
  comment: string;
  date: string;
  filmId: number;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};

export type Comments = Comment[];
