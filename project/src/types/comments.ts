type Comment = {
  comment: string;
  date: string;
  filmId: string;
  id: string;
  rating: number;
  user: {
    id: string;
    name: string;
  };
};

export type Comments = Comment[];
