import {
  adoptAnimalApi,
  fetchAnimalApi,
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
    .catch(() => null);

export const fetchAnimal = (id, setResponse) =>
  fetchAnimalApi(id)
    .then((response) => setResponse(response.data))
    .catch(() => null);

export const updateAnimal = (animalObject) =>
  updateAnimalApi(animalObject)
    .then(() => showNotification("Animal Updated Successfully", "success"))
    .catch((err) => {
      showAllNotifications(errorHelper(err), "error");
      return Promise.reject(err);
    });

export const adoptAnimal = (id, guardianObject) =>
  adoptAnimalApi(id, guardianObject)
    .then(() => showNotification("Adopted Successfully", "success"))
    .catch((err) => {
      showAllNotifications(errorHelper(err), "error");
      return Promise.reject(err);
    });
