import { useState, useEffect } from "react";
import { getClientes, postCliente } from "../services/apiServices";
import "./CadastroCliente.css";

const CadastroCliente = () => {
  const [form, setForm] = useState({ nome: "", email: "" });
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await postCliente(form);
    if (result) {
      setForm({ nome: "", email: "" });
      fetchClientes();
    } else {
      setError("Erro ao cadastrar cliente.");
    }
    setLoading(false);
  };

  const fetchClientes = async () => {
    const data = await getClientes();
    setClientes(data);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit} className="form-cliente">
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Cadastrar"}
        </button>
        {error && <p className="erro">{error}</p>}
      </form>

      <h3>Clientes Cadastrados</h3>
      <ul className="lista-clientes">
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <strong>{cliente.name}</strong> — {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CadastroCliente;
