// App.tsx
import {
    BrowserRouter,       // Enables routing using the browser's history API
    Routes,              // Wraps all route definitions
    Route,               // Defines a single route (path + component)
    Link,                // Link component for client-side navigation
    useParams,           // Hook to access path parameters like :id
    useNavigate,         // Hook to change URL programmatically
    useSearchParams,     // Hook to access/query ?key=value from the URL
    Outlet               // Used for nested route rendering
} from 'react-router-dom';

// Basic home route
function Home() {
    return <h2>🏠 Home</h2>;
}

// Programmatic navigation
function Profile() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>👤 Profile</h2>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
}

// Dynamic path param + query param
function UserDetail() {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const showDetails = searchParams.get('details') === 'true';

    return (
        <div>
            <h2>User ID: {id}</h2>
            {showDetails && <p>Showing detailed view.</p>}
            <button onClick={() => setSearchParams({ details: 'true' })}>
                Show Details
            </button>
        </div>
    );
}

// Parent route for nested content
function Dashboard() {
    return (
        <div>
            <h2>📊 Dashboard</h2>
            <nav>
                {/* These are nested routes, rendered inside <Outlet /> */}
                <Link to="stats">Stats</Link> |{' '}
                <Link to="settings">Settings</Link>
            </nav>

            {/* <Outlet> is where nested child routes will render */}
            <Outlet />
        </div>
    );
}

// Nested components
function Stats() {
    return <h3>📈 Dashboard Stats</h3>;
}

function Settings() {
    return <h3>⚙️ Dashboard Settings</h3>;
}

// App with routing structure
export default function RoutingApp() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> |{' '}
                <Link to="/profile">Profile</Link> |{' '}
                <Link to="/users/42">User 42</Link> |{' '}
                <Link to="/dashboard">Dashboard</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/users/:id" element={<UserDetail />} />

                {/* Nested Route structure */}
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="stats" element={<Stats />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                {/* Fallback route */}
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
        </BrowserRouter>
    );
}
