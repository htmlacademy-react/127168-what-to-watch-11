import {Movies} from '../types/movies';

const movies: Movies = [
  {
    name: 'A Star Is Born',
    posterImage: 'img/poster/A_Star_Is_Born.jpeg',
    previewImage: 'img/preview/A_Star_Is_Born.jpeg',
    backgroundImage: 'img/background/A_Star_is_Born.jpeg',
    backgroundColor: '#C4C0C0',
    description: 'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.',
    rating: 3.9,
    scoresCount: 244484,
    director: 'Bradley Cooper',
    starring: [
      'Lady Gaga',
      'Bradley Cooper',
      'Sam Elliott'
    ],
    runTime: 136,
    genre: 'Drama',
    released: 2018,
    id: '1',
    isFavorite: false,
    videoLink: 'https://assets.mixkit.co/videos/preview/mixkit-talented-drummer-playing-in-a-dark-place-44137-large.mp4',
    previewVideoLink: 'https://assets.mixkit.co/videos/preview/mixkit-talented-drummer-playing-in-a-dark-place-44137-large.mp4'
  },
  {
    name: 'Moonrise Kingdom',
    posterImage: 'img/poster/Moonrise_Kingdom.jpeg',
    previewImage: 'img/preview/moonrise-kingdom.jpeg',
    backgroundImage: 'img/background/Moonrise_Kingdom.jpeg',
    backgroundColor: '#D8E3E5',
    description: 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    rating: 7.9,
    scoresCount: 291183,
    director: 'Wes Anderson',
    starring: [
      'Jared Gilman',
      'Kara Hayward',
      'Bruce Willis'
    ],
    runTime: 94,
    genre: 'Adventure',
    released: 2012,
    id: '2',
    isFavorite: false,
    videoLink: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4',
    previewVideoLink: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4'
  },
  {
    name: 'Legend',
    posterImage: 'img/poster/Legend.jpeg',
    previewImage: 'img/preview/legend.jpeg',
    backgroundImage: 'img/background/legend.jpeg',
    backgroundColor: '#E1DAD7',
    description: 'Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.',
    rating: 3.5,
    scoresCount: 138487,
    director: 'Brian Helgeland',
    starring: [
      'Tom Hardy',
      'Emily Browning',
      'Taron Egerton'
    ],
    runTime: 132,
    genre: 'Crime',
    released: 2015,
    id: '3',
    isFavorite: false,
    videoLink: 'https://assets.mixkit.co/videos/preview/mixkit-keyboardist-playing-in-the-dark-44139-large.mp4',
    previewVideoLink: 'https://assets.mixkit.co/videos/preview/mixkit-keyboardist-playing-in-the-dark-44139-large.mp4'
  },
  {
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'img/poster/Fantastic_Beasts.jpeg',
    previewImage: 'img/preview/fantastic-beasts-the-crimes-of-grindelwald.jpeg',
    backgroundImage: 'img/background/Fantastic_Beasts.jpeg',
    backgroundColor: '#B6A99F',
    description: 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
    rating: 3.4,
    scoresCount: 160757,
    director: 'David Yates',
    starring: [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    runTime: 134,
    genre: 'Fantasy',
    released: 2018,
    id: '4',
    isFavorite: false,
    videoLink: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
    previewVideoLink: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4'
  },
  {
    name: 'Midnight Special',
    posterImage: 'img/poster/Midnight_Special.jpeg',
    previewImage: 'img/preview/midnight-special.jpeg',
    backgroundImage: 'img/background/Midnight_Special.jpeg',
    backgroundColor: '#828585',
    description: 'A father and son go on the run, pursued by the government and a cult drawn to the child\'s special powers.',
    rating: 3.3,
    scoresCount: 67815,
    director: 'Jeff Nichols',
    starring: [
      'Michael Shannon',
      'Joel Edgerton',
      'Kirsten Dunst '
    ],
    runTime: 112,
    genre: 'Action',
    released: 2016,
    id: '5',
    isFavorite: false,
    videoLink: 'https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4',
    previewVideoLink: 'https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4'
  },
  {
    name: 'Matrix',
    posterImage: 'img/poster/matrix.jpeg',
    previewImage: 'img/preview/matrix.jpeg',
    backgroundImage: 'img/background/matrix.jpeg',
    backgroundColor: '#B9B27E',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    rating: 4.4,
    scoresCount: 1503092,
    director: 'Wachowski Brothers',
    starring: [
      'Keanu Reeves',
      'Laurence Fishburne',
      'Carrie-Anne Moss'
    ],
    runTime: 136,
    genre: 'Action',
    released: 1999,
    id: '6',
    isFavorite: false,
    videoLink: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-playing-on-a-computer-43527-large.mp4',
    previewVideoLink: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-playing-on-a-computer-43527-large.mp4'
  },
  {
    name: 'Pulp Fiction',
    posterImage: 'img/poster/Pulp_Fiction.jpeg',
    previewImage: 'img/preview/pulp-fiction.jpeg',
    backgroundImage: 'img/background/Pulp_Fiction.jpeg',
    backgroundColor: '#795433',
    description: 'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 1.5,
    scoresCount: 1635992,
    director: 'Quentin Tarantino',
    starring: [
      'John Travolta',
      'Uma Thurman',
      'Samuel L. Jackson'
    ],
    runTime: 153,
    genre: 'Crime',
    released: 1994,
    id: '7',
    isFavorite: false,
    videoLink: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
    previewVideoLink: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4'
  },
  {
    name: 'Shutter Island',
    posterImage: 'img/poster/Shutter_Island.jpeg',
    previewImage: 'img/preview/shutter-island.jpeg',
    backgroundImage: 'img/background/Shutter_Island.jpeg',
    backgroundColor: '#977461',
    description: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
    rating: 4.1,
    scoresCount: 1002557,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Emily Mortimer',
      'Mark Ruffalo'
    ],
    runTime: 138,
    genre: 'Thriller',
    released: 2010,
    id: '8',
    isFavorite: false,
    videoLink: 'https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4',
    previewVideoLink: 'https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4'
  }
];

export {movies};
