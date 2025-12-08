import { useState, useEffect } from "react";
import { api } from "../api";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const data = await api.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      setErrorMessage("Failed to get todo's. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  const handleCreate = async (newTodo) => {
    setLoading(true);
    try {
      await api.todos.create(newTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Failed to get todo's. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id, newTodo) => {
    setLoading(true);
    try {
      await api.todos.update(id, newTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Failed to update todo's. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await api.todos.delete(id);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Failed to delete todo's. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data: todos,
    fetch: fetchTodos,
    filter: setFilters,
    create: handleCreate,
    update: handleUpdate,
    delete: handleDelete,
    error: {
      message: errorMessage,
      clear: () => setErrorMessage(),
    },
  };
}
