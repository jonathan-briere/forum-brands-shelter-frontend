import { apiUrls } from "constants/apiUrls";
import baseApi from "./baseApi";

export const fetchAnimalsApi = (animal_type) =>
  baseApi.get(apiUrls.animals, { params: { animal_type } });

export const fetchAnimalApi = (id) =>
  baseApi.get(apiUrls.animal(id));

export const updateAnimalApi = (animalObject) =>
  baseApi.put(apiUrls.updateAnimal(animalObject.id), animalObject);

export const adoptAnimalApi = (id, guardianObject) =>
  baseApi.put(apiUrls.adopt(id), { guardian: guardianObject });
