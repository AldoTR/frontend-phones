import { useState } from "react";
import { useMutation, gql } from '@apollo/client';
import ServiceEmoji from "../services/service.emoji"
import { useTranslation } from "react-i18next";
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
      const response = await ServiceEmoji.getDaVinci({ animal: animalInput });

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
      <h3 className="card-title2">{t('emoji')}</h3>
        <form onSubmit={onSubmit}>
          <input
            className="input-field"
            type="text"
            name="animal"
            placeholder="Enter a text to convert it into emoji"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input className="pointer button" type="submit" value="Convert" />
        </form>
        <div>
            <p className="textResult">Result: {result}</p>
        </div>
    </div>
  );
}