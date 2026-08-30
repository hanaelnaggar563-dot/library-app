import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosInstance";

function LoginPage() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post("/auth/login", formData);
            console.log(data)
            localStorage.setItem("token", data.access_token);
            navigate("/library");
        } catch (error) {
            alert("Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm mx-auto"
            style={{ maxWidth: "400px" }}>
            <h3 className="mb-3">Login</h3>
            <input type="email" className="form-control mb-2" placeholder="Email"
                onChange={e => setFormData({ ...formData, email: e.target.value })} required
            />
            <input type="password" className="form-control mb-3"
                placeholder="Password" onChange={e => setFormData({
                    ...formData, password:
                        e.target.value
                })} required />
            <button type="submit" className="btn btn-dark w-100">Login</button>
        </form>
    );
}
export default LoginPage;