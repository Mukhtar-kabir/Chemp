import axios from "axios";

export function carsData() {
  const apiToken = "f5286c75-1be9-4f88-bb01-2536f529f6e0";
  const headers = {
    Authorization: `Bearer ${apiToken}`,
  };

  return axios.get("https://carapi.app/api", { headers });
}

// f5286c75-1be9-4f88-bb01-2536f529f6e0
