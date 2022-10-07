import React from "react";
import { useForm } from "react-hook-form";
import "./Input.scss";

const Input = ({ onSubmitInput, InputName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    onSubmitInput(values.PokemonSearch);
  };

  return (
    <div className="inputButton">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="demo-flex-spacer"></div>
        <div className="webflow-style-input">
          <input
            className="submit"
            placeholder="ingresa nombre de pokemon"
            {...register("PokemonSearch", { required: true, maxLength: 10 })}
          ></input>
          {errors.PokemonSearch?.type === "maxLength" && (
            <p role="alert">Maximo 10 caracteres</p>
          )}{" "}
          {errors.PokemonSearch?.type === "required" && (
            <p role="alert">Nombre de pokemon requerido</p>
          )}{" "}
        </div>
        <button
          type="submit"
          className="buttonBuscar"
          onClick={() => handleSubmit(onSubmit)}
        >
          {" "}
          Buscar{" "}
        </button>
      </form>
    </div>
  );
};

export default Input;
