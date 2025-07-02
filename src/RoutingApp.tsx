// RoutingApp.tsx
import {
    BrowserRouter,       // Enables routing using the browser's history API
    Routes,              // Wraps all route definitions
    Route,               // Defines a single route (path + component)
    Link,                // Link component for client-side navigation
    useParams,           // Hook to access path parameters like :id
    useNavigate,         // Hook to change URL programmatically
    useSearchParams      // Hook to access/query ?key=value from the URL
} from 'react-router-dom';

// Basic route component
function Home() {
    return <h2>🏠 Home</h2>;
}

// Programmatic navigation example
function Profile() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>👤 Profile</h2>
            {/* Navigates to "/" when clicked */}
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
}

// Route that uses both path param (:id) and query param (?details=true)
function UserDetail() {
    const { id } = useParams(); // Get ":id" from the path (e.g., /users/42)
    const [searchParams, setSearchParams] = useSearchParams();
    const showDetails = searchParams.get('details') === 'true'; // Read "?details=true"

    return (
        <div>
            <h2>User ID: {id}</h2>
            {showDetails && <p>Showing detailed view.</p>}
            {/* Set query param "?details=true" */}
            <button onClick={() => setSearchParams({ details: 'true' })}>
                Show Details
            </button>
        </div>
    );
}

// The app component with router setup
export default function RoutingApp() {
    return (
        // BrowserRouter must wrap the part of your app using routing
        <BrowserRouter>

            {/* Link is like <a>, but doesn't reload the page */}
            <nav>
                <Link to="/">Home</Link> |{' '}
                <Link to="/profile">Profile</Link> |{' '}
                <Link to="/users/42">User 42</Link>
            </nav>

            {/* Routes holds all <Route> definitions */}
            <Routes>
                {/* Static path route */}
                <Route path="/" element={<Home />} />

                {/* Another static path route */}
                <Route path="/profile" element={<Profile />} />

                {/* Dynamic route with path param ":id" */}
                <Route path="/users/:id" element={<UserDetail />} />

                {/* Catch-all route (404 fallback) */}
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>

        </BrowserRouter>
    );
}

