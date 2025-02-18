
import Hero from "../../components/Hero/Hero";


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
      

    </>
  )
};

export default HomePage;
