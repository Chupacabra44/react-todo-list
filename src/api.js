const BASE_URL = import.meta.env.VITE_MOCKAPI_BASE_URL;

export const api = {
  todos: {
    getAll(params = {}) {
      const searchParams = new URLSearchParams(params).toString();
      return fetch(`${BASE_URL}todos?${searchParams}`, {
        method: "GET",
        headers: { "content-type": "application/json" },
      }).then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          return [];
        }
      });
    },

    create(data) {
      return fetch(`${BASE_URL}todos`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        // Send your data in the request body as JSON
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    },

    update(id, data) {
      return fetch(`${BASE_URL}todos/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        // Send your data in the request body as JSON
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    },

    delete(id) {
      return fetch(`${BASE_URL}todos/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    },
  },
};
