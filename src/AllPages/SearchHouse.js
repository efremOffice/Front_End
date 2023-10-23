import NavBar from '../mui/NavBar';
import Footer from '../mui/Footer';
import SearchHouseLocation from '../mui/SearchHouseLocation';
function SearchHouse() {
  return (
    <div className="App">
      <NavBar/>
       <SearchHouseLocation />
      <Footer/>
    </div>
  );
}

export default SearchHouse;
