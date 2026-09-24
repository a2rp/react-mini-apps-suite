import { createElement, lazy, Suspense, useState } from "react";
import { useLocation, NavLink, Route, Routes } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import ScrollToTop from "./components/ScrollToTop";
import { Styled } from "./App.styled";
import Footer from "./components/footer";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));
const About = lazy(() => import("./pages/about"));
const BookReadingList = lazy(() => import("./pages/apps/bookReadingList"));
const CalorieCounter = lazy(() => import("./pages/apps/calorieCounter"));
const GroceryListManager = lazy(() => import("./pages/apps/groceryListManager"));
const HabitTracker = lazy(() => import("./pages/apps/habitTracker"));
const Journal = lazy(() => import("./pages/apps/journal"));
const MovieWatchList = lazy(() => import("./pages/apps/movieWatchList"));
const PasswordManager = lazy(() => import("./pages/apps/passwordManager"));
const RecipeBox = lazy(() => import("./pages/apps/recipeBox"));
const TodoListCrud = lazy(() => import("./pages/apps/todoListCrud"));
const WaterIntake = lazy(() => import("./pages/apps/waterIntake"));
const WorkoutPlanner = lazy(() => import("./pages/apps/workoutPlanner"));
const PackingListGenerator = lazy(() => import("./pages/apps/packingListGenerator"));
const PersonalGoalSetter = lazy(() => import("./pages/apps/personalGoalSetter"));
const SimpleTimer = lazy(() => import("./pages/apps/simpleTimer"));
const GiftIdeaList = lazy(() => import("./pages/apps/giftIdeaList"));
const QuoteCollector = lazy(() => import("./pages/apps/quoteCollector"));
const PersonalDashboard = lazy(() => import("./pages/apps/personalDashboard"));
const ColorPalettePicker = lazy(() => import("./pages/apps/colorPalettePicker"));
const UnitConverter = lazy(() => import("./pages/apps/unitConverter"));
const TicTacToeGame = lazy(() => import("./pages/apps/ticTacToeGame"));
const WordScrambleGame = lazy(() => import("./pages/apps/wordScrambleGame"));
const QuizApp = lazy(() => import("./pages/apps/quizApp"));
const DrawingApp = lazy(() => import("./pages/apps/drawingApp"));
const StickyNotesApp = lazy(() => import("./pages/apps/stickyNotesApp"));
const KanbanBoard = lazy(() => import("./pages/apps/kanbanBoard"));
const TextEditor = lazy(() => import("./pages/apps/textEditor"));
const QrGenerator = lazy(() => import("./pages/apps/qrGenerator"));

const navigation = [
    ["/", "Home", Home], ["/about", "About", About], ["/book-reading-list", "Book Reading List", BookReadingList],
    ["/calorie-counter", "Calorie Counter", CalorieCounter], ["/grocery-list-manager", "Grocery List Manager", GroceryListManager],
    ["/habit-tracker", "Habit Tracker", HabitTracker], ["/journal", "Journal", Journal], ["/movie-watch-list", "Movie Watch List", MovieWatchList],
    ["/password-manager", "Password Manager", PasswordManager], ["/recipe-box", "Recipe Box", RecipeBox], ["/todo-list-crud", "Todo List CRUD", TodoListCrud],
    ["/water-intake", "Water Intake", WaterIntake], ["/workout-planner", "Workout Planner", WorkoutPlanner], ["/packing-list-generator", "Packing List Generator", PackingListGenerator],
    ["/personal-goal-setter", "Personal Goal Setter", PersonalGoalSetter], ["/simple-timer", "Simple Timer", SimpleTimer], ["/gift-idea-list", "Gift Idea List", GiftIdeaList],
    ["/quote-collector", "Quote Collector", QuoteCollector], ["/personal-dashboard", "Personal Dashboard", PersonalDashboard], ["/color-palette-picker", "Color Palette Picker", ColorPalettePicker],
    ["/unit-converter", "Unit Converter", UnitConverter], ["/tic-tac-toe-game", "Tic-Tac-Toe Game", TicTacToeGame], ["/word-scramble-game", "Word Scramble Game", WordScrambleGame],
    ["/quiz-app", "Quiz App", QuizApp], ["/drawing-app", "Drawing App", DrawingApp], ["/sticky-notes-app", "Sticky Notes App", StickyNotesApp],
    ["/kanban-board", "Kanban Board", KanbanBoard], ["/text-editor", "Text Editor", TextEditor], ["/qr-generator", "QR Generator", QrGenerator],
];

const App = () => {
    const [displayNav, setDisplayNav] = useState(true);
    const { pathname } = useLocation();

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.Brand to="/" aria-label="React Mini Apps home">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                    <span><small>A2RP</small>React Mini Apps</span>
                </Styled.Brand>
                <Styled.MenuButton type="button" onClick={() => setDisplayNav((current) => !current)} aria-label="Toggle app navigation" aria-expanded={displayNav}>
                    <MdMenuOpen size={22} aria-hidden="true" />
                </Styled.MenuButton>
            </Styled.Header>
            <Styled.Main>
                <Styled.NavWrapper className={displayNav ? "active" : ""}>
                    <div className="navInner">
                        {navigation.map(([path, label]) => <NavLink key={path} to={path} title={label}>{label}</NavLink>)}
                    </div>
                </Styled.NavWrapper>
                <Styled.ContentWrapper id="scroll-root" data-scroll-root>
                    <Styled.RoutesWrapper>
                        <Suspense key={pathname} fallback={<Styled.Loading aria-live="polite">Loading app...</Styled.Loading>}>
                            <Routes>
                                {navigation.map(([path, , Component]) => <Route key={path} path={path} element={createElement(Component)} />)}
                                <Route path="/home" element={<Home />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </Styled.RoutesWrapper>
                    <Styled.Footer><Footer /></Styled.Footer>
                </Styled.ContentWrapper>
            </Styled.Main>
            <ScrollToTop />
        </Styled.Wrapper>
    );
};

export default App;