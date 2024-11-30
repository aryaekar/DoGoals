import React, { useState } from "react";

const LoginPage = () => {
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        if (!formData.email || !formData.password) {
            setError("Both fields are required");
            return;
        }

        try {
            setError("");
            const response = await fetch("http://localhost:8000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) {
                setError(data.msg);
                return;
            }

            console.log("Login Successful:", data);

            // Redirect or update app state
            alert("Login successful!");
        } catch (err) {
            console.error(err);
            setError(err.message || "Something went wrong");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {error && <p style={styles.error}>{error}</p>}
                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="email">Email</label>
                    <input
                        type="email"  //quick fix for validation of email if req validate later
                        name="email"
                        id="email"
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;

const styles = {
    container: {
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    inputGroup: {
        marginBottom: "15px",
    },
    label: {
        marginBottom: "5px",
        fontWeight: "bold",
    },
    input: {
        marginRight: "10px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
    },
    button: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    error: {
        color: "red",
        marginBottom: "10px",
    },
};
