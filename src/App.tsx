import { BrowserRouter } from 'react-router-dom'
import RootRoutes from './routes/Routes';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import ThemeToggler from './layouts/ThemeToggler';

// import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div className="App mx-auto overflow-hidden">
      {/* <TodoPage /> */}
      <div className='app  dark:bg-slate-900 h-screen w-full transition-colors duration-500 ease-in-out'>
        <ThemeToggler />
        <Header />
        <section className="px-6 h-screen">
          <BrowserRouter>
            <RootRoutes />
          </BrowserRouter>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
