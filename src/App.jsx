import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import CourseList from "./components/CourseList"
import Footer from "./components/Footer"
import CourseCard from "./components/CourseCard"
function App() {

  function handleSelect(title){
      alert("you selected " + title)
    }

  function handleShare(title){
    alert(title + "Added to Fav")
  }

  return (
    <>
    <Navbar/>
    <main>
    <Hero /><hr></hr>
    <CourseCard title="React" description="frontened library" duration={20} onSelect={handleSelect} onfavourite={handleShare}/>
    <CourseCard title="Python" description="AI/ML" duration={30} onSelect={handleSelect} onfavourite={handleShare}/>          
    <CourseCard title="MongoDB" description="Data storage" duration={10} onSelect={handleSelect} onfavourite={handleShare}/>
    
    

    </main>
    <Footer/>
    </>
  )
}

export default App
