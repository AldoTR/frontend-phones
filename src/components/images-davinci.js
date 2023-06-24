import { useState } from "react";
//import styles from "./text-davinci-003.css";
import ServiceImage003 from "../services/service.images";
import { useTranslation } from "react-i18next";


export default function Textdavinci003() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const { t } = useTranslation();


  async function onSubmit(event) {  
    event.preventDefault();
    try {
      const response = await ServiceImage003.getDaVinci({ animal: animalInput });
      /*const response = await fetch("/text-davinci-003/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });*/

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <h3>{t("imagen")}</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="animal"
          placeholder="Enter a text to generate image"
          value={animalInput}
          onChange={(e) => setAnimalInput(e.target.value)}
        />
        <input type="submit" value="Generate image" />
      </form>
      {result && result2 && (
        <div>
          <img className="img-generator" alt="generada" src={result} />
        </div>
      )}
    </div>
  );
}