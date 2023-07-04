import { createAnimalApi, fetchAnimalsApi } from "api/dashboardApi";
import {
  showAllNotifications,
  showNotification,
} from "helper/notificationHelper";
import { errorHelper } from "helper/responseHelper";

export const fetchAnimals = (animal_type, setResponse) =>
  fetchAnimalsApi(animal_type)
    .then((respone) => setResponse(respone.data))
    .catch((err) => null);

export const createAnimal = (animalObject) =>
  createAnimalApi(animalObject)
    .then(() => {
      showNotification("Animal Created Success", "success");
    })
    .catch((err) => showAllNotifications(errorHelper(err), "error"));
