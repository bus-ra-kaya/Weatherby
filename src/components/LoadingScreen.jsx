export default function LoadingScreen() {
    return (
        <div className="loading" role="status" aria-live="polite">
            <h1>Loading...</h1>
            <div className="spinner"></div>
        </div>
    )
}