

import GenresList from "../../components/GenresList/GenresList";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Container from "../../components/Сontainer/Container";


const HomePage = () => {

  // const [films, setFilms] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getTrendingMovies();
  //       setFilms(data);

  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);




  return (
    <>

      <Hero />
      {/* <HeroList films={films} /> */}
      <Section>
        <Container>
          <GenresList />
        </Container>

      </Section>


    </>
  )
};

export default HomePage;
