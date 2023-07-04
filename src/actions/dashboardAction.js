import { createAnimalApi, fetchAnimalsApi, updateAnimalApi } from "api/dashboardApi";
import {
  showAllNotifications,
  showNotification,
} from "helper/notificationHelper";
import { errorHelper } from "helper/responseHelper";

export const fetchAnimals = (animal_type, setResponse) =>
  fetchAnimalsApi(animal_type)
    .then((respone) => setResponse(respone.data.animals))
    .catch((err) => null);

export const createAnimal = (animalObject) =>
  createAnimalApi(animalObject)
    .then(() => {
      showNotification("Animal Added Successfully", "success");
    })
    .catch((err) => showAllNotifications(errorHelper(err), "error"));

export const updateAnimal = (animalObject) =>
  updateAnimalApi(animalObject)
    .then(() => {
      showNotification("Animal Updated Successfully", "success");
    })
    .catch((err) => showAllNotifications(errorHelper(err), "error"));
