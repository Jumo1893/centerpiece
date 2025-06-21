import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>

            <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <Link to="/"><div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Centerpiece</div></Link>
                <ul style={{ listStyle: "none", display: "flex", gap: "1rem", margin: 0, padding: 0 }}>
                    <li><a href="#features" style={{ textDecoration: "none", color: "#333" }}>Funktionen</a></li>
                    <li><a href="#about" style={{ textDecoration: "none", color: "#333" }}>Über Uns</a></li>
                    <li><a href="#contact" style={{ textDecoration: "none", color: "#333" }}>Kontakt</a></li>
                </ul>
            </nav>


            <header style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h1>Willkommen beim Centerpiece</h1>
                <p>Die einfachste Lösung für dein Problem</p>
            </header>

            <section>
                <h3>Anwendungen</h3>
                <li>
                    <Link to="/finance">Finanzapp (comming soon)</Link>
                </li>
            </section>

            

            <footer style={{ textAlign: "center", marginTop: "4rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
                <p>&copy; 2025 Julian Morys. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
