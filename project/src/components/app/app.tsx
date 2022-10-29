import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProp = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: AppScreenProp): JSX.Element {
  return (
    <MainScreen title={title} genre={genre} year={year}/>
  );
}

export default App;
