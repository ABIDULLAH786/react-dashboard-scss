import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <div>Home
            <button onClick={() => navigate("/dashboard")}>Go TO Dash</button>
        </div>
    )
}

export default Home