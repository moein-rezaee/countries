import { useRestStore } from "./rest";
import safeObject from "../utils/safeObject"; 
import toolbox from "../utils/toolbox"; 

export const useCountriesStore = defineStore("countriesStore", () => {
  const { getFirst, getFirstKeyValue } = safeObject;

  const { get, getAll, query } = useRestStore();
  const countries = {
    async all() {
      let i = 0;
      try {
        const params = `?fields=name,cca2,population,continents,capital`;
        const data = await getAll(params);
        const list = [];
        for (i; i < data?.length; i++) {
          const item = data[i];
          list.push({
            id: i,
            name: item.name.common,
            image: `${item.cca2.toLowerCase()}.jpg`,
            population: item.population,
            region: getFirst(item.continents),
            capital: getFirst(item.capital),
          });
        }
        this.log("all", list);
        return ref(list);
      } catch (error) {
        console.log(i, error);
      }
      return ref(null);
    },
    async single(name) {
      const country = ref(null);
      try {
        const params = `?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`;
        const item = await get(name, params);
        const borders = await this.borders(item.borders);
        const languages = this.getLanguages(item.languages);
        country.value = {
          name: item.name.common,
          flag: item.flags.svg,
          population: item.population,
          region: getFirst(item.continents),
          subregion: item.subregion,
          capital: getFirst(item.capital),
          tld: getFirst(item.tld),
          currencies: getFirstKeyValue(item.currencies),
          languages,
          borders,
        };
      } catch (error) {
        console.log(error);
      }
      this.log("single", country.value);
      return country;
    },
    async borders(codes) {
      try {
        let arr = [];
        const borrdersParams = `&fields=name`;
        let list = await query(codes, borrdersParams);
        list.forEach((i) => arr.push(i.name.common));
        this.log("borders", arr);
        return arr;
      } catch (error) {
        console.log(error);
      }
      return null;
    },
    getLanguages(obj) {
      let arr = [];
      for (const key in obj) arr.push(obj[key]);
      return arr.join(",");
    },
    getRegions(countries) {
      const { groupBy } = toolbox;
      let object = groupBy(countries, 'region');
      let regions = [];
      for (const key in object)
          regions.push(key);
      return ref(regions); 
    },
    log: (func, obj) => console.log(`countriesStore --> ${func}: `, obj),
  };
  return countries;
});
