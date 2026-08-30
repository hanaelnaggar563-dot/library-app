import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosInstance";

function SignupPage() {
    const [formData, setFormData] = useState({
        name: "", email: "", password:
            ""
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/auth/register", formData);
            alert("Account created!");
            navigate("/login");
        } catch (error) {
            alert("Registration failed");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm mx-auto"
            style={{ maxWidth: "400px" }}>
            <h3 className="mb-3">Register</h3>
            <input type="text" className="form-control mb-2" placeholder="Name"
                onChange={e => setFormData({ ...formData, name: e.target.value })} required
            />
            <input type="email" className="form-control mb-2" placeholder="Email"
                onChange={e => setFormData({ ...formData, email: e.target.value })} required
            />
            <input type="password" className="form-control mb-3"
                placeholder="Password" onChange={e => setFormData({
                    ...formData, password:
                        e.target.value
                })} required />
            <button type="submit" className="btn btn-primary w-100">Create
                Account</button>
        </form>
    );
}
export default SignupPage;