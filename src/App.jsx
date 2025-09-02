import './App.css'
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import { Outlet, Link } from "react-router";
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import Header from './components/Header';
import AppAppBar from './components/AppAppBar';
import { Hero } from './components/Hero';

export default function App() {

  return (
    <>
      <AppAppBar />
      <Hero />
      <Home />
      <Outlet />
      <Footer />
    </>
  )
}

// export function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/projects">Projects</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
         
//         </ul>
//       </nav>

//       <hr />

//       {/* 
//        <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
      
//       An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }
