import {
  createAnimalApi,
  fetchAnimalsApi,
  updateAnimalApi,
} from "api/dashboardApi";
import {
  showAllNotifications,
  showNotification,
} from "helper/notificationHelper";
import { errorHelper } from "helper/responseHelper";

export const fetchAnimals = (animal_type, setResponse) =>
  fetchAnimalsApi(animal_type)
    .then((response) => setResponse(response.data.animals))
    .catch((err) => null);

export const createAnimal = (animalObject) =>
  createAnimalApi(animalObject)
    .then((response) => {
      showNotification("Animal Added Successfully", "success");
      return response
    })
    .catch((err) => {
      showAllNotifications(errorHelper(err), "error");
      return Promise.reject(err);
    });

export const updateAnimal = (animalObject) =>
  updateAnimalApi(animalObject)
    .then(() => showNotification("Animal Updated Successfully", "success"))
    .catch((err) => {
      showAllNotifications(errorHelper(err), "error");
      return Promise.reject(err);
    });
