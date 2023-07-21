import safeObject from "../utils/safeObject";
export const useRestStore = defineStore("restStore", () => {
  const { getFirst } = safeObject;
  const rest = {
    baseUrl: "https://restcountries.com/v3.1",
    getApi(params) {
      return `${this.baseUrl}/${params}`;
    },
    async getAll(params) {
      const api = this.getApi(`all${params}`);
      const { data: list } = await useFetch(api);
      return list.value;
    },
    async get(name, params = "") {
      if (!name) return null;
      const api = this.getApi(`name/${name + params}`);
      const { data: i } = await useFetch(api);
      return getFirst(i.value);
    },
    async query(codes, params = "") {
      if (!codes) return null;
      let strCodes = codes.join(",").toLowerCase();
      const api = this.getApi(`alpha?codes=${strCodes + params}`);
      const { data: list } = await useFetch(api);
      return list.value;
    },
  };
  return rest;
});
