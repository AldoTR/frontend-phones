import { useState } from "react";
import List from "../services/service.list"
import { useTranslation } from "react-i18next";
import { useMutation, gql } from '@apollo/client';
import { AUTH_TOKEN } from './constants';

const CREATE_PROMPT_MUTATION = gql`
  mutation PostMutation(
    $fecha: String!,
    $modelo: String!,
    $prompt: String!,
    $result: String!,
    
  ) {
    createConsulta(
      fecha: $fecha,
      modelo: $modelo,
      prompt: $prompt,
      result: $result
    ) {
      fecha
      prompt
      result
    }
  }
`;

export default function Textdavinci003() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const { t } = useTranslation();
  const [createConsulta] = useMutation(CREATE_PROMPT_MUTATION);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await List.getDaVinci({ animal: animalInput });
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

      const authToken = localStorage.getItem(AUTH_TOKEN);
      const fecha = new Date().toISOString();

      createConsulta({
        variables: {
          fecha: fecha,
          modelo: data.model,
          prompt: data.prompt,
          result: data.result,
        },
        context: {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        },
        onCompleted: () => alert("Datos guardados exitosamente"),
      });
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="container">
      <h3 className="card-title2">{t('libros')}</h3>
        <form onSubmit={onSubmit}>
          <input
            className="input-field"
            type="text"
            name="animal"
            placeholder="Enter a word about a topic of interest"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input className="pointer button" type="submit" value="Suggest" />
        </form>
        <div>
            <p className="textResult">Result: {result}</p>
        </div>
    </div>
  );
}