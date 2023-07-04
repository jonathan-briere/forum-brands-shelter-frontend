import { apiUrls } from "constants/apiUrls";
import baseApi from "./baseApi";

export const fetchAnimalsApi = (animal_type) =>
  baseApi.get(apiUrls.animals, { params: { animal_type } });

export const createAnimalApi = (animalObject) =>
  baseApi.post(apiUrls.animals, animalObject);

export const updateAnimalApi = (animalObject) =>
  baseApi.put(apiUrls.updateAnimal(animalObject.id), animalObject);
