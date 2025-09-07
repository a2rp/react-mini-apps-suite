import ScrollToTop from './components/ScrollToTop'
import { Styled } from './App.styled'
import { NavLink, Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'
import { CircularProgress } from '@mui/material'
import Footer from './components/footer'

const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/notFound'));
const About = lazy(() => import('./pages/about'));

const BookReadingList = lazy(() => import('./pages/apps/bookReadingList'));
const CalorieCounter = lazy(() => import('./pages/apps/calorieCounter'));
const GroceryListManager = lazy(() => import('./pages/apps/groceryListManager'));
const HabitTracker = lazy(() => import('./pages/apps/habitTracker'));
const Journal = lazy(() => import('./pages/apps/journal'));
const MovieWatchList = lazy(() => import('./pages/apps/movieWatchList'));
const PasswordManager = lazy(() => import('./pages/apps/passwordManager'));
const RecipeBox = lazy(() => import('./pages/apps/recipeBox'));
const TodoListCrud = lazy(() => import('./pages/apps/todoListCrud'));
const WaterIntake = lazy(() => import('./pages/apps/waterIntake'));
const WorkoutPlanner = lazy(() => import('./pages/apps/workoutPlanner'));

const App = () => {
    const [displayNav, setDisplayNav] = useState(true);
    const handleDisplayNav = () => {
        setDisplayNav(prev => !prev);
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.NavLinkWrapper onClick={handleDisplayNav}>
                        <MdMenuOpen size={20} />
                    </Styled.NavLinkWrapper>
                    <Styled.Heading><NavLink to="/">a2rp: ReactJS Mini Apps</NavLink></Styled.Heading>
                </Styled.Header>
                <Styled.Main>
                    <Styled.NavWrapper className={`${displayNav ? "active" : ""}`}>
                        <div className="navInner">
                            <NavLink to="/" title="Home">Home</NavLink>
                            <NavLink to="/book-reading-list" title="Book Reading List" >Book Reading List</NavLink>
                            <NavLink to="/calorie-counter" title="Calorie Counter">Calorie Counter</NavLink>
                            <NavLink to="/grocery-list-manager" title="Grocery L:ist Manager">Grocery L:ist Manager</NavLink>
                            <NavLink to="/habit-tracker" title="Habit Tracker">Habit Tracker</NavLink>
                            <NavLink to="/journal" title="Journal">Journal</NavLink>
                            <NavLink to="/movie-watch-list" title="Movie Watch List">Movie Watch List</NavLink>
                            <NavLink to="/password-manager" title="Password Manager">Password Manager</NavLink>
                            <NavLink to="/recipe-box" title="Recipe Box">Recipe Box</NavLink>
                            <NavLink to="/todo-list-crud" title="Todo List Crud">Todo List Crud</NavLink>
                            <NavLink to="/water-intake" title="Water Intake">Water Intake</NavLink>
                            <NavLink to="/workout-planner" title="Workout Planner">Workout Plnner</NavLink>
                        </div>
                    </Styled.NavWrapper>

                    <Styled.ContentWrapper id="scroll-root" data-scroll-root>
                        <Styled.RoutesWrapper>
                            <Suspense fallback={<CircularProgress />}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/about" element={<About />} />

                                    <Route path="/calorie-counter" element={<CalorieCounter />} />
                                    <Route path="/grocery-list-manager" element={<GroceryListManager />} />
                                    <Route path="/habit-tracker" element={<HabitTracker />} />
                                    <Route path="/journal" element={<Journal />} />
                                    <Route path="/movie-watch-list" element={<MovieWatchList />} />
                                    <Route path="/password-manager" element={<PasswordManager />} />
                                    <Route path="/recipe-box" element={<RecipeBox />} />
                                    <Route path="/todo-list-crud" element={<TodoListCrud />} />
                                    <Route path="/water-intake" element={<WaterIntake />} />
                                    <Route path="/workout-planner" element={<WorkoutPlanner />} />

                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </Suspense>
                        </Styled.RoutesWrapper>

                        <Styled.Footer>
                            <Footer />
                        </Styled.Footer>
                    </Styled.ContentWrapper>
                </Styled.Main>
                <ScrollToTop />
            </Styled.Wrapper >
        </>
    )
}

export default App
